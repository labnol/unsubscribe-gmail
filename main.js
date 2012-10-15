$().ready(function(){

	var last_subject = false;


	$('div.Cq div:first div:first').append('<a href="#" target="_blank" style="background:red;color:#fff;padding:5px;text-decoration:none;display:none;" id="btn_junk">Unsubscribe</a>');



	setInterval(function(){
		

		if( $('h1.ha').size() ){
	
			subject = $('h1.ha').html();

			if( last_subject != subject ){

				last_subject = subject;

				links = $('table.Bs').find('a');
				total = links.size();
				if( total ){
					found = false;
					i=0;
					while(i<total && !found){

						text = $(links[i]).html();
						url = $(links[i]).attr('href');

						var found = ( text.match(/unsubscribe/gi) || url.match(/unsubscribe/gi) || url.match(/nuMuMail/gi) );
						if( found ){
							$('#btn_junk').attr('href',url).show();
						}else{
							$('#btn_junk').hide();
						}

						i++;
					}
				}else{
					$('#btn_junk').hide();
				}

			}
		}


	},1000);



});