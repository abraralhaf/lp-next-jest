node {

 def commitId

   stage('SCM Checkout'){
       git credentialsId: 'github-credentials', url: 'https://github.com/abraralhaf/lp-next-jest.git'
         
       bat 'git rev-parse HEAD > commit'

       commitId = readFile('commit').trim()
       echo "commitId (global) before : ${env.GIT_COMMIT}"
       echo "commitId : ${commitId}"
       env.GIT_COMMIT = commitId
       echo "commitId(global) after ${env.GIT_COMMIT}"
    
   }
//    stage('Initial Node'){
//          nodejs(nodeJSInstallationName: 'node_local'){
//          bat 'npm install'
//         }
//     }
//     stage('Test'){
//         nodejs(nodeJSInstallationName: 'node_local'){
//          bat 'npm run test'
//         }
//         echo 'finish run test'
//     }
//     stage('Build'){
//         nodejs(nodeJSInstallationName: 'node_local'){
//          bat 'npm run build'
//         }
//         echo 'finish run Build'
//     }
//     stage('Build Docker Image'){
//         echo 'Build Docker Image'
//         bat 'docker build -t alhuft/landingpage-next:1.0.0 .'
//     }
//     stage('Push Docker Image'){
//         withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
//             bat "docker login -u alhuft -p ${dockerHubPwd}" 
//         }
//         bat 'docker push alhuft/landingpage-next:1.0.0'
//     }
    
}