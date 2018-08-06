var myApp = angular.module("myApp",[]);

myApp.controller("myController",function($scope){
   
    console.log("Mycontroller....");
    $scope.clickedUser = {};
    $scope.message="";
   
    $scope.users = [
        { 
          UserName: "Ashish Sharma" , EmailID: "ash64sharma@gmail.com" , ContactNo: "9854261752"
        },
        {
          UserName: "Kunal Gupta" , EmailID: "kgupta.gupta1996@gmail.com" , ContactNo: "8015970360"
       },
       {
          UserName: "Vinay Vats" , EmailID: "vinaay609vts@gmail.com" , ContactNo: "7045207910"
       },
       {
          UserName: "Harsh Sharma" , EmailID: "harsh99sharma@gmail.com" , ContactNo: "7090451680"
       }
    ];
  $scope.saveuser = function(){
    // console.log($scope.NewUser);
    $scope.users.push($scope.NewUser);
    $scope.NewUser = {};
    $scope.message="New User Added Successfully!";
  }
   
  $scope.selectedUser = function(user){
    //console.log(user);
   $scope.clickedUser = user;
  }
  
  $scope.updateUser = function(){
    $scope.message="User Updated Successfully!";
  }
  
  $scope.deleteUser = function(){
    $scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
    $scope.message="User Deleted Successfully!";
  }
  
  $scope.clearMessage = function(){
    $scope.message="";
  }
  });