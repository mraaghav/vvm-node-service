var loginQueryConst = {

  findByPhoneNoAndPasswordQuery: "select * from login_details where phone_no=? and password=?",

 updateLoginTimeByLoginIdQuery: "update login_details set recent_login_time=? where login_id=?",

 getLoginDetailsByprofileBasicIdQuery: "select email_id,phone_no from login_details where profile_basic_id=?"

}
module.exports = loginQueryConst;
