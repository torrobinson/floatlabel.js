<h1>floatlabel.js</h1>
![floatlabel](http://www.torrobinson.com/files/floatlabel-xab2RPp8YI.gif)

<h2>Usage</h2>
1. Throw some inputs into a container element and style them appropriately for the design pattern (leave some space on top of the inputs).
```HTML
 <div id="example1">
                <input type="text" id="fname" placeholder="First name"  />  <br/>
                <input type="text" id="mname" placeholder="Middle Name" />  <br/>
                <input type="text" id="lname" placeholder="Last name"   />  <br/>
 </div>
```
2. Include jQuery, floatlabel.jquery.js, and floatlabel.jquery.css, then apply the plugin to the container element.
```HTML
  <!-- load jQuery -->
  <script src="http://code.jquery.com/jquery-2.1.0.min.js" /></script>
       
  <!-- load floatTable and its css -->
  <script src="floatlabel.jquery.js"></script>
  <link rel="stylesheet" type="text/css" href="floatlable.jquery.css">
```

3. Initiate the plugin on the container of your inputs
```javascript
<script type="text/javascript">
            $( document ).ready(function() {
                    $('#example1').floatLabel();  
            });
</script>
```

### Optional parameters:
You can pass the following optional parameters based on your preferences:
```javascript
leftOffset     : '0px',  //left attribute of label
topOffset      : '-14px',//top attribute of label
animationSpeed : 125     //how fast the label shows/hides
```