import $ from 'jquery';
function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://xhepncvfs6.execute-api.us-east-1.amazonaws.com/prod/";

    $('input[name=pref1]:checked').val();

    var candidate_name = $("#candidate_name").val();
    candidate_name=candidate_name.replace('/+/g',' ');
    var candidate_phone = $("#candidate_phone").val();
    var pref1_date = $("#pref1-date").val();
    pref1_date=pref1_date.replace('/+/g',' ');
    pref1_date=pref1_date.replace('/%2C/g','');
    var pref2_date = $("#pref2-date").val();
    pref2_date=pref2_date.replace('/+/g',' ');
    pref2_date=pref2_date.replace('/%2C/g','');
    var pref3_date = $("#pref3-date").val();
    pref3_date=pref3_date.replace('/+/g',' ');
    pref3_date=pref3_date.replace('/%2C/g','');
    var pref1_slot=$('input[name="pref1"]:checked').val();
    var pref2_slot=$('input[name="pref2"]:checked').val();
    var pref3_slot=$('input[name="pref3"]:checked').val();
    var data = {
        candidate_name : candidate_name,
        candidate_phone : candidate_phone,
        pref1_date : pref1_date,
        pref2_date : pref2_date,
        pref3_date : pref3_date,
        pref1_slot : pref1_slot,
        pref2_slot : pref2_slot,
        pref3_slot : pref3_slot
     };

    
    $.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        $.ajax({
            type : "GET",
            url : "http://sapient.interview.scheduling.s3-website-us-east-1.amazonaws.com/submitted",
            contentType: "application/json",
            error: function(){
                console.log("failed");
            },
            success:function(){
                console.log("passed");
            }
        });
      },
      error: function () {}
    });

    
  }

  export default submitToAPI;