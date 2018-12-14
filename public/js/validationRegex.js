var regexCheckJS = {

  userNameValidation: function(name) {
    // console.log(name);
    if (name == 'NULL' || name.length == 0 || (!(/^[a-z A-Z]*$/g).test(name))) {
      regexCheckJS.snackBar("Enter Valid Display Name");
      return false;
    } else {
      return true;
    }
  },

  userEmailIdValidation: function(emailId) {
    // console.log(emailId);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailId == 'NULL' || emailId.length == 0 || (!(reg).test(emailId))) {
      regexCheckJS.snackBar("Enter Valid Email Id");
      return false;
    } else {
      return true;
    }

  },

  userPhoneNoValidation: function(phoneNo) {
    console.log(phoneNo);
    if (phoneNo == 'NULL' || !(phoneNo.length == 10) || (!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g).test(phoneNo))) {
      regexCheckJS.snackBar("Enter Valid Phone Number");
      return false;
    } else {
      return true;
    }
  },

  userProfessionValidation: function(profession) {
    // console.log(profession);
    if (profession == 'NULL' || profession == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Profession");
      return false;
    } else {
      return true;
    }
  },

  userEducationValidation: function(education) {
    // console.log(education);
    if (education == 'NULL' || education == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Education");
      return false;
    } else {
      return true;
    }
  },

  useReligionValidation: function(religion) {
    // console.log(religion);
    if (religion == 'NULL' || religion == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Religion");
      return false;
    } else {
      return true;
    }
  },

  userCasteValidation: function(caste) {
    // console.log(caste);
    if (caste == 'NULL' || caste == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Caste");
      return false;
    } else {
      return true;
    }
  },

  userDobValidation: function(dob) {
    // console.log(dob);
    if (dob == 'NULL') {
      regexCheckJS.snackBar("Enter Valid Date of Birth");
      return false;
    } else {
      return true;
    }
  },

  userGenderValidation: function(gender) {
    // console.log(gender);
    if (gender == 'NULL' || gender == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Gender");
      return false;
    } else {
      return true;
    }
  },

  userHeightValidation: function(height) {
    // console.log(height);
    if (height == 'NULL' || height <= 0) {
      regexCheckJS.snackBar("Enter Valid Height");
      return false;
    } else {
      return true;
    }
  },

  userComplexionValidation: function(complexion) {
    // console.log(complexion);
    if (complexion == 'NULL' || complexion == "-- select one --") {
      regexCheckJS.snackBar("Enter Valid Complexion");
      return false;
    } else {
      return true;
    }
  },

userSalaryValidation: function(salary) {
  // console.log(salary);
  if (salary == 'NULL' || salary == "-- select one --") {
    regexCheckJS.snackBar("Enter Valid Salary");
    return false;
  } else {
    return true;
  }
},

userCityLivingValidation: function(cityLiving) {
  // console.log(cityLiving);
  if (cityLiving == 'NULL' || cityLiving == "-- select one --") {
    regexCheckJS.snackBar("Enter Valid City");
    return false;
  } else {
    return true;
  }
},

userNativePlaceValidation: function(nativePlace) {
  // console.log(nativePlace);
  if (nativePlace == 'NULL') {
    regexCheckJS.snackBar("Enter Valid Native Place");
    return false;
  } else {
    return true;
  }
},

userPhysicallyDisabledValidation: function(physicallyDisabled) {
  // console.log(physicallyDisabled);
  if (physicallyDisabled == 'NULL' || physicallyDisabled == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for physically Disabled");
    return false;
  } else {
    return true;
  }
},

userMotherTongueValidation: function(motherTongue) {
  // console.log(motherTongue);
  if (motherTongue == 'NULL' || motherTongue == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for motherTongue");
    return false;
  } else {
    return true;
  }
},

userLanguageKnownValidation: function(languageKnown) {
  // console.log(languageKnown);
  if (languageKnown == 'NULL' || languageKnown == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for languageKnown");
    return false;
  } else {
    return true;
  }
},

userRasiValidation: function(rasi) {
  // console.log(rasi);
  if (rasi == 'NULL' || rasi == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for Rasi");
    return false;
  } else {
    return true;
  }
},

userNakshatraValidation: function(nakshatra) {
  // console.log(nakshatra);
  if (nakshatra == 'NULL' || nakshatra == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for Nakshatra");
    return false;
  } else {
    return true;
  }
},

userLagnaValidation: function(lagna) {
  // console.log(lagna);
  if (lagna == 'NULL' || lagna == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for Lagna");
    return false;
  } else {
    return true;
  }
},

userPaagamValidation: function(paagam) {
  // console.log(paagam);
  if (paagam == 'NULL' || paagam == "-- select one --") {
    regexCheckJS.snackBar("Choose valid option for Paagam");
    return false;
  } else {
    return true;
  }
},

userPobValidation : function(pob) {
  // console.log(pob);
  if (pob == 'NULL') {
    regexCheckJS.snackBar("Enter valid place of birth");
    return false;
  } else {
    return true;
  }
},

userTobValidation: function(tob) {
  // console.log(tob);
  if (tob == 'NULL') {
    regexCheckJS.snackBar("Choose valid option for time of birth");
    return false;
  } else {
    return true;
  }
},

userFNameValidation: function(fName) {
  // console.log(fName);
  if (fName == 'NULL') {
    regexCheckJS.snackBar("Enter Father Name");
    return false;
  } else {
    return true;
  }
},

userMNameValidation: function(mName) {
  // console.log(mName);
  if (mName == 'NULL') {
    regexCheckJS.snackBar("Enter Mother Name");
    return false;
  } else {
    return true;
  }
},

userSibCountValidation: function(sibCount) {
  // console.log(sibCount);
  if (sibCount == 'NULL' || sibCount == "-- select one --")  {
    regexCheckJS.snackBar("Choose valid option for Sibling Count");
    return false;
  } else {
    return true;
  }
},

userSibCountValidation: function(sibCount) {
  // console.log(sibCount);
  if (sibCount == 'NULL' || sibCount == "-- select one --")  {
    regexCheckJS.snackBar("Choose valid option for Sibling Count");
    return false;
  } else {
    return true;
  }
},

userAddressValidation: function(address) {
  // console.log(address);
  if (address == 'NULL')  {
    regexCheckJS.snackBar("Enter valid Address");
    return false;
  } else {
    return true;
  }
},

userAboutMeValidation: function(aboutMe) {
  // console.log(aboutMe);
  if (aboutMe == 'NULL')  {
    regexCheckJS.snackBar("Enter About Me");
    return false;
  } else {
    return true;
  }
},

userExpectationsValidation: function(expectations) {
  // console.log($expectations);
  if ($expectations == 'NULL')  {
    regexCheckJS.snackBar("Enter Expectations");
    return false;
  } else {
    return true;
  }
},


  snackBar: function(message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    x.innerHTML = message;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

};