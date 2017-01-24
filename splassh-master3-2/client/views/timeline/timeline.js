
tml = function(){
	var attachmentsByProjectArray = Collections.Files.find({projectId: Session.get('currentProjectId')}).fetch();
	var imageByProjectArray = Collections.Images.find({projectId: Session.get('currentProjectId')}).fetch();

	var fileArray = attachmentsByProjectArray.concat(imageByProjectArray);
	//console.log(attachmentsByProjectArray);
	//var attachmentsByProjectArray = [];
	//console.log(attachmentsByProjectArray);
	var eventArray = [];
	//var events = "";
	fileArray.forEach(function(element){
		var year = element.updatedAt().getFullYear();
		var month = element.updatedAt().getMonth() + 1;
		var date = element.updatedAt().getDate();
		var filename = element.name();

		var text = filename + " Uploaded"
		//events += "{\"start_date\":{\"month\":" + month + ",\"day\":" + date + ",\"year\":" + year + "},\"text\":" + text + "},"

		eventArray.push({
			"start_date":{
				"month": month,
				"day": date,
				"year": year
			},
			"text": {
				"headline": filename
			}
		});
	});

	console.log(eventArray);

	if (eventArray.length == 0){
		eventArray.push({
			"start_date":{
				"month": new Date().getMonth(),
				"day": new Date().getDate(),
				"year": new Date().getFullYear()
			},
			"text": {
				"headline": "Upload Something In Attachments"
			}
		});
		var timeline_json = {
			"title": {
				"text":{
					"headline": "No Attachment Uploaded",
					"text": "Data uploaded are shown in this timeline"
				}
			},
			"events": eventArray
		};
	} else {
		var timeline_json = {
			"title": {
				"text":{
					"headline": "Project Data Events",
					"text": "Data uploaded are shown in this timeline"
				}
			},
			"events": eventArray
		};
	}



	//console.log(timeline_json.toString());
	return timeline_json;

}

	//	test code below: returns a sample json structure
/*
tml = function (){
	var timeline_json = {
	    "title": {
	        "text": {
	          "headline": "Whitney Houston<br/> 1963 - 2012",
	          "text": "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
	        }
	    },
	    "events": [
	      {
	        "start_date": {
	          "month": "8",
	          "day": "9",
	          "year": "1963"
	        },
	        "text": {
	          "headline": "A Musical Heritage",
	          "text": "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
	        }
	      },
	      {
	        "start_date": {
	          "year": "1978"
	        },
	        "text": {
	          "headline": "First Recording",
	          "text": "At the age of 15 Houston was featured on Michael Zager's song, Life's a Party."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1978"
	        },
	        "text": {
	          "headline": "The Early Years",
	          "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1978"
	        },
	        "text": {
	          "headline": "Early Album Credits",
	          "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1983"
	        },
	        "text": {
	          "headline": "Signed",
	          "text": "Houston is signed to Arista Records after exec Clive Davis sees her performing on stage with her mother in New York."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1985"
	        },
	        "text": {
	          "headline": "Debut",
	          "text": "Whitney Houston's self titled first release sold over 12 million copies in the U.S. and included the hit singles 'How Will I Know,' 'You Give Good Love,' 'Saving All My Love For You' and 'Greatest Love of All.'"
	        }
	      },
	      {
	        "start_date": {
	          "year": "1986"
	        },
	        "text": {
	          "headline": "'The Grammys'",
	          "text": "In 1986 Houston won her first Grammy for the song Saving All My Love. In total she has won six Grammys, the last of which she won in 1999 for It's Not Right But It's Okay."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1987"
	        },
	        "text": {
	          "headline": "'Whitney'",
	          "text": "Multiplatinum second album sells more than 20 million copies worldwide. With 'Whitney', Houston became the first female artist to produce four number 1 singles on one album including \"I Wanna Dance With Somebody,' 'Didn't We Almost Have It All,' 'So Emotional' and 'Where Do Broken Hearts Go.'"
	        }
	      },
	      {
	        "start_date": {
	          "year": "1988"
	        },
	        "text": {
	          "headline": "\"One Moment In Time\"",
	          "text": "The artist's fame continues to skyrocket as she records the theme song for the Seoul Olympics, 'One Moment In Time.'"
	        }
	      },
	      {
	        "start_date": {
	          "year": "1989"
	        },
	        "text": {
	          "headline": "Bobby Brown",
	          "text": "Houston and Brown first meet at the Soul Train Music Awards. In an interview with Rolling Stone Magazine, Houston admitted that it was not love at first sight. She turned down Brown's first marriage proposal but eventually fell in love with him."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1991"
	        },
	        "text": {
	          "headline": "Super Bowl",
	          "text": "Houston's national anthem performance captures the hearts and minds of Americans ralllying behind soldiers in the Persian Guf War."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1992"
	        },
	        "text": {
	          "headline": "\"The Bodyguard\"",
	          "text": "Houston starred opposite Kevin Costner in the box office hit, The Bodyguard. The soundtrack to the movie sold over 44 million copies worldwide  garnering 3 Grammy's for the artist."
	        }
	      },
	      {
	        "start_date": {
	          "year": "1992"
	        },
	        "text": {
	          "headline": "Married Life",
	          "text": "<p>After three years of courtship, Houston marries New Edition singer Bobby Brown. Their only child Bobbi Kristina Brown was born in 1993.</p><p>In 2003 Brown was charged with domestic violence after police responded to a domestic violence call. Houston and Brown were featured in the reality show, \"Being bobby Brown,\" and divorced in 2007.</p>"
	        }
	      },
	      {
	        "start_date": {
	          "year": "2002"
	        },
	        "text": {
	          "headline": "Crack is Whack",
	          "text": "<p>Houston first publicly admitted to drug use in an interview with Diane Sawyer. The singer coined the term \"Crack is Whack,\" saying that she only used more expensive drugs.</p>"
	        }
	      },
	      {
	        "start_date": {
	          "year": "2004"
	        },
	        "text": {
	          "headline": "Rehab",
	          "text": "<p>Houston entered rehab several times beginning in 2004. She declared herself drug free in an interview with Oprah Winfrey in 2009 but returned to rehab in 2011.</p>"
	        }
	      },
	      {
	        "start_date": {
	          "year": "2005"
	        },
	        "text": {
	          "headline": "Being Bobby Brown",
	          "text": "<p>Being Bobby Brown was a reality show starring Brown and wife Whitney Houston. Houston refused to sign for a second season. A clip of her telling Brown to \"Kiss my ass,\" became a running gag on The Soup.</p>"
	        }
	      },
	      {
	        "start_date": {
	          "year": "2010"
	        },
	        "text": {
	          "headline": "A Rocky Comeback",
	          "text": "<p>Houston's comeback tour is cut short due to a diminished voice damaged by years of smoking. She was reportedly devastated at her inability to perform like her old self.</p>"
	        }
	      },
		  {
	        "start_date": {
	          "month": "2",
	          "day": "11",
	          "year": "2012"
	        },
	        "text": {
	          "headline": "Whitney Houston<br/> 1963-2012",
	          "text": "<p>Houston, 48, was discovered dead at the Beverly Hilton Hotel on  on Feb. 11, 2012. She is survived by her daughter, Bobbi Kristina Brown, and mother, Cissy Houston.</p>"
	        }
	      }
	    ]
	};
	return timeline_json;
}
*/
