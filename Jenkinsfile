pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh './gradlew clean build'
            }
        }

        stage('Test') {
            steps {
                sh './gradlew check'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
                    junit '**/build/test-results/test/TEST-*.xml'
                }
            }
        }

        stage('Build Image') {
            docker.build("teichae/jenkins")
        }

        /*
        stage('Push Image') {
            docker.withRegistry('', '')
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }
        }
        */
    }
}
