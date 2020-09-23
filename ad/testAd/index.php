<!DOCTYPE html>
<html>
    <head>
        <title>TestAd</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
		<script type="text/javascript">
			function log(message) {
				console.log(message);
				document.write(message);
			}
		</script>
    </head>
    <body>

    </body>
	

	<?php
		// List of available localized versions as 'lang code' => 'url' map
		$sites = array(
			"en" => "http://en.mysite.com/",
			"bn" => "http://bn.mysite.com/",
		);

		// Get 2 char lang code
		$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
		echo('<script>log(\'' . $lang . '\');</script>');

		// Set default language if a `$lang` version of site is not available
		if (!in_array($lang, array_keys($sites)))
			$lang = 'en';

		// Finally redirect to desired location
		//header('Location: ' . $sites[$lang]);
	?>

</html>