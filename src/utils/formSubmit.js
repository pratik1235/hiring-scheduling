import $ from 'jquery';

function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://prod-103.westus.logic.azure.com:443/workflows/1dda70774e7649aa9aa3d52a088f738a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xMl9Cp_Tup1NsX725ZvtSCmT9ED_McPGezTz2JtQY-U";
    let BaseUrl="http://sapient.interview.scheduling.s3-website-us-east-1.amazonaws.com";
    $('input[name=pref1]:checked').val();

    var candidate_name = $("#candidate_name").val();
 
    var candidate_phone = $("#candidate_phone").val();
    var pref1_date = $("#pref1-date").val();

    var pref2_date = $("#pref2-date").val();

    var pref3_date = $("#pref3-date").val();

    var pref1_slot=$('input[name="pref1"]:checked').val();
    var pref2_slot=$('input[name="pref2"]:checked').val();
    var pref3_slot=$('input[name="pref3"]:checked').val();
    var data = {
        "candidate_name" : candidate_name,
        "candidate_phone" : candidate_phone,
        "pref1_date" : pref1_date,
        "pref2_date" : pref2_date,
        "pref3_date" : pref3_date,
        "pref1_slot" : pref1_slot,
        "pref2_slot" : pref2_slot,
        "pref3_slot" : pref3_slot
     };

    
    $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      complete: function (response,status) {
        let redirect_url=BaseUrl+"/submitted";
        let already_submitted_url=BaseUrl+"/AlreadySubmitted";
        let stat=response.status;
        console.log("successfully posted data with status code "+stat+"\n "+JSON.stringify(response));
        if(stat===200)
          window.location.href=redirect_url;
        else
          window.location.href=already_submitted_url;
      },

    });

    
  }

  export default submitToAPI;