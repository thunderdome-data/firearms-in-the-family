$(document).ready(function(){
	    	
	    	var s = skrollr.init();

	    	var currentTh; 

    	 	for (var i=1; i<7; i++) {
    	 		$("#th" + i).hide();

    	 		$("#n" + i).mouseover( function() {
    	 			var id = $(this).attr("data-id");
    	 			currentTh = id;
    	 			$("#th" + id).show();
    	 		});

	    	 	$("#n" + i).mouseout( function() {
	    	 		$("#th" + currentTh).hide();
	    	 	});

	    	 	$("#n" + i).click( function() {
	    	 		var anchor = $(this).attr("data-anchor");
	    	 		_gaq.push(['_trackEvent', 'ThumbNav', 'Clicked', anchor]);
	    	 		$.scrollTo("#" + anchor, 1000);
	    	 	});

    	 	}
  			
	  	 	$("#vidConTease").fitVids();
    	 	$("#vidCon1").fitVids();
    	 	$("#vidCon2").fitVids();
    	 	$("#vidCon3").fitVids();
    	 	$("#vidCon4").fitVids();
    	 	$("#vidCon5").fitVids();
    	 	$("#vidCon6").fitVids();

	    	
	    	
	    	//SKROLLR
	    	skrollr.init({          
	            mobileCheck: function() {
	                //hack - forces mobile version to be off
	                return false;
	            }
	        });
	        //END SKROLLR
	        
			//RANDOM STUFF
			$('.nav li a').on('click',function(){
	    		$('.navbar-collapse.in').collapse('hide');
			});

			if (document.referrer.split('/')[2] == undefined) {
				//$("#propname").text("");
			}

			$("#descEmbed").hide();
			var params;
			function getURLParameter(sParam) {
				    var sPageURL = window.location.search.substring(1);
				    var sURLVariables = sPageURL.split('&');
				    
				    for (var i = 0; i < sURLVariables.length; i++) {
				        var sParameterName = sURLVariables[i].split('=');
				        if (sParameterName[0] == sParam) {
				            params = sParameterName[1];
				            
				            if (params) {
				            	$("#desc").hide();
				            	$("#thetitle").hide();
				            	$("#gridCon").hide();
				            	$("#descEmbed").show();
				            	$(".continue").hide();
				            	$(".backtotop").hide();
				            }

				            return sParameterName[1];
				        } else {
				        	return 1;
				        }
				    }
				}
			getURLParameter("embed");

			//END RANDOM STUFF


			//DFM HEADER
			var dfmSites = ['digitalfirstmedia.com', 'contracostatimes.com', 'insidebayarea.com', 'marinij.com', 'mercurynews.com', 'santacruzsentinel.com', 'siliconvalley.com', 'canoncitydailyrecord.com', 'dailycamera.com', 'denverpost.com', 'fortmorgantimes.com', 'journal-advocate.com', 'reporterherald.com', 'timescall.com', 'coloradodaily.com', 'middletownpress.com', 'nhregister.com', 'registercitizen.com', 'dailybreeze.com ', 'dailybulletin.com', 'dailynews.com', 'pasadenastarnews.com', 'presstelegram.com', 'redlandsdailyfacts.com', 'sbsun.com', 'sgvtribune.com', 'whittierdailynews.com', 'la.com', 'berkshireeagle.com', 'lowellsun.com', 'sentinelandenterprise.com', 'thetranscript.com', 'dailytribune.com', 'macombdaily.com', 'themorningsun.com', 'theoaklandpress.com', 'heritage.com', 'twincities.com', 'trentonian.com', 'alamogordonews.com', 'currentargus.com', 'daily-times.com', 'lcsun-news.com', 'demingheadlight.com', 'ruidosonews.com', 'scsun-news.com', 'dailyfreeman.com', 'oneidadispatch.com', 'saratogian.com', 'troyrecord.com', 'chicoer.com', 'dailydemocrat.com', 'montereyherald.com', 'record-bee.com', 'redbluffdailynews.com', 'thereporter.com', 'times-standard.com', 'timesheraldonline.com', 'ukiahdailyjournal.com', 'orovillemr.com', 'morningjournal.com', 'news-herald.com', 'delcotimes.com', 'pottsmerc.com', 'thereporteronline.com', 'timesherald.com', 'ydr.com', 'montgomerynews.com', 'elpasotimes.com', 'benningtonbanner.com', 'reformer.com', 'businessjournals.com', 'ldnews.com', 'eveningsun.com', 'publicopiniononline.com'];
	    	var theref = document.referrer.split('/')[2];
	    	var thedomain;
	   	
			var rand = dfmSites[Math.floor(Math.random() * dfmSites.length)];
			dfmNav.initParams('mode|home', 'site|' + rand, 'pageTitle| ', 'leaderboard|true');
		});
