pipeline {
    agent any

    environment {
        registry = "registry.local/demo2"
        image = ''
    }
    
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
            steps {
                script {
                    image = docker.build registry + ":${env.BUILD_NUMBER}"
                }
            }
        }
    
        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry('', '') {
                        image.push(registry + ":${env.BUILD_NUMBER}")
                    }
                }
            }
        }

        stage('Remove Image') {
            steps {
                script {
                    image = docker.build registry + ":${env.BUILD_NUMBER}"
                }
            }
        }
    }
}
