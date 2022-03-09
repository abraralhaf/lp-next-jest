def gitUrlAuth = "https://${env.GITHUB_TOKEN}@github.com/abraralhaf/lp-next-jest.git/"

pipeline {
    agent any

    environment{
        CI = 'true'
    }

    tools{
        nodejs "Node-16.14.0"
    }

    stages {
        stage('Setup'){
            steps{
               git gitUrlAuth
               echo 'finishing setup'
            }
            
        }
          stage('Test'){
            // when{
            //         expression{
            //             BRANCH_NAME == 'master'
            //         }
            //     }
            steps{
                sh "chmod +x -R ${env.WORKSPACE}"
                sh 'npm run test'
                echo 'finishing test'
            }
        }
        stage('Build') {
            steps { 
                echo 'executing node..'
                sh 'npm install'
                
                echo 'executing yarn..'
                sh 'npm install yarn'
                
                
                echo 'finishing build..'
              
           }
        }
      
        stage('Deployment'){
            steps{
                sh 'npm run build'
                echo 'finishing deployment'
            }
        }
    }
}
