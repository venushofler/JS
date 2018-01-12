/* 
	   CIS213 Javascript 2-2 p.133

	  
	   Author:  Venus Hofler
	   Date:    11/14/2016

		Filename:   index.html
							
		Supporting files:	angry.jpg									joneses.jpg			moana.jpg			ride.jpg				twice.jpg
							arlo.jpg			dory.jpg				jungle.jpg			mrPete.jpg			sing.jpg				wedding.jpg
							arrival.jpg			girl.jpg				kicks.jpg			ove.jpg				southside.jpg			what.jpg
							barbershop3.jpg		globe.jpg				lala.jpg			parks.jpg			storks.jpg				zoolander.jpg
							beautiful.jpg		hamlet.jpg				love.jpg			peculiar.jpg		sully.jpg
							billy.jpg			harry.jpg				mag7.jpg			pets.jpg			temptation.jpg
							birth.jpg			holiday.jpg				men.jpg				pickle.jpg			title.jpg
							bleed.jpg			ice.jpg					middle.jpg			queen.jpg			trolls.jpg					
					
*/






/**************************** from index.html*****************************************/

<script type="text/javascript" src="myCin.js">
			/* <![CDATA[ */
				function myFunction() {
    window.open("");
}
			/* ]]> */
		</script>

		<script>
			/* <![CDATA[ */
				var image = document.getElementById("aaa");
				var img_array=["angry.jpg",	"arlo.jpg",	"dory.jpg", "jungle.jpg","hamlet.jpg"," queen.jpg", "joneses.jpg",	"moana.jpg", "ride.jpg", "twice.jpg", "sully.jpg"];

				var index=0;
					
					function slide()
					{

					    document["img_id"].src = img_array[index];
					    index++;
					    if(index>=img_array.length)
					    {
					    index=0;
					    }
					}

				setInterval("slide()",2500);
			/* ]]> */
		</script>

		

/**************************** end index.html******************************************/




/**************************** from myCinemaMovies.html********************************/

<script src="https://www.youtube.com/iframe_api">
			/* <![CDATA[ */
				var player;

					function onYouTubeIframeAPIReady() {
						player = new YT.Player('video-value', {
							width: 600,
							height: 400,
							videoId: 'Xa0Q0J5tOP0',
							playerVars: {
								color: 'white',
								playlist: 'taJ60kskkns,FG0fTKAqZ5g'
							},
							events: {
								onReady: initialize
							}
						});
					}
			/* ]]> */
		</script>

		<script>
			/* <![CDATA[ */
				var image = document.getElementById("aaa");
				var img_array=["http://png-4.findicons.com/files/icons/1008/quiet/256/java.png","http://icons.iconarchive.com/icons/tpdkdesign.net/refresh-cl/256/System-Java-icon.png"];
				var index=0;
					
					function slide()
					{

					    document["aaa"].src = img_array[index];
					    index++;
					    if(index>=img_array.length)
					    {
					    index=0;
					    }
					}

				setInterval("slide()",2000);
			/* ]]> */
		</script>

/**************************** end myCinemaMovies.html********************************/




/**************************** from registration.html********************************/	

	<script type="text/javascript" src="myCin.js">
			/* <![CDATA[ */
				function registration(){
				 	window.open('file:///C:/Users/vbhofler/OneDrive%20for%20Business%201/CIS213%20Javascript/Project/registration.html','_self',false);
			/* ]]> */
		</script>

		<script type="text/javascript" >
			/* <![CDATA[ */
				
				function myFunction() {
    				window.alert('Sign up today and get one week free!');
				}
				
				
			/* ]]> */
		</script>

		<script type="text/javascript" >
			/* <![CDATA[ */	

				function resetForm(){
					document.getElementById("registration".reset();
				}
			/* ]]> */
		</script>	

		<script type="text/javascript">
			/* <! [CDATA[ */

				function submitForm(){
					
					window.open("thankYou.html");
				}

			/* ]] */
		</script>

		<script type="text/javascript">
			/* <![CDATA[ */
			
				<!-- This script contains a function that will open a new window 100x300 pixels and center it in the middle of the page when user clicks "About this Javascript Program -->
				
				function termsOfUsePopUp() {
					var winWidth=300;
					var winHeight=100;
					var leftPosition = (screen.width-winWidth)/2;
					var topPosition = (screen.height-winHeight)/2;
					var optionString = "width=" + winWidth + ",height="
					+ winHeight + ",left=" + leftPosition + ",top="
					+ topPosition;
					
					<!-- This window.open function opens the termsOfUse.html page . -->
					OpenWin = window.open("file:///C://Project/termsOfUse.html, "CtrlWindow", optionString");						
				}
			/*]]>*/
		</script>

/**************************** end registration.html********************************/




/**************************** END OF FILE********************************/				