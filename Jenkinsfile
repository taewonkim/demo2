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

        environment {
            registry = "owner/demo2"
            image = ''
        }
    
        stage('Build Image') {
            script {
                image = docker.build registry + ":${env.BUILD_NUMBER}"
            }
        }
    
        /*
        stage('Push Image') {
            script {
                docker.withRegistry('', '')
                    image.push(registry + ":${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Remove Image') {
            script {
                image = docker.build registry + ":${env.BUILD_NUMBER}"
            }
        }
        */
    }
}
