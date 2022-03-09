def gitUrlAuth = "https://github.com/abraralhaf/lp-next-jest.git/"


pipeline {
    agent any
    environment{
        CI = 'true'
    }
    tools{
        nodejs "Node-16.14.0"
    }

       stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}