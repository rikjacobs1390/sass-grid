<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Grid</title>
        
        <meta name="robots" content="nofollow, noindex">
        <meta name="description" content="Grid">
        <meta name="keywords" content="Grid">
        <meta name="author" content="Rik Jacobs">
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">


        <!-- Styles -->
        <link href="-sitedesign/styles/style.css" rel="stylesheet" type="text/css" property="stylesheet"/>

        <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <?php
        /*
        <script>window.jQuery || document.write('<script src="-sitedesign/scripts/libs/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="-sitedesign/scripts/libs/modernizr-2.6.2.min.js"></script>
        <script src="-sitedesign/scripts/_plugins.js"></script>
        <script src="-sitedesign/scripts/script.js"></script>
        */
       ?>

    </head>

    <body>
        <header>Header</header>
        <div id="main">

            <h1>FULLWIDTH</h1>
            <div class="gridcontainer">
                <div class="grid-equalHeight">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            <div class="gridcontainer">
                <div class="grid-equalHeight-noGutter">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            <div class="gridcontainer-noPadding">
                <div class="grid-equalHeight">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            <div class="gridcontainer-noPadding">
                <div class="grid-equalHeight-noGutter">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            


            <h1>MAXWIDTH</h1>
            <div class="gridcontainer-maxWidth">
                <div class="grid-equalHeight">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            <div class="gridcontainer-maxWidth">
                <div class="grid-equalHeight-noGutter">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            <div class="gridcontainer-maxWidth-noPadding">
                <div class="grid-equalHeight">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>
            <div class="gridcontainer-maxWidth-noPadding">
                <div class="grid-equalHeight-noGutter">
                    <?php include "-partials/columns.php"; ?>
                </div>
            </div>





        </div>
        <footer>footer</footer>
    </body>
</html>