pipeline {
    agent any

    stages {

        stage('Verify Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build') {
            steps {
                echo 'Static HTML project - No build required.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Website is ready.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}