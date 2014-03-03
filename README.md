<h1>floatlabel.js</h1>
![floatlabel](http://www.torrobinson.com/files/floatlabel-xab2RPp8YI.gif)

<h2>Usage</h2>
### Wrap inputs in a container
```HTML
 <div id="example1">
                <input type="text" id="fname" placeholder="First name"  />  <br/>
                <input type="text" id="mname" placeholder="Middle Name" />  <br/>
                <input type="text" id="lname" placeholder="Last name"   />  <br/>
 </div>
```
### Include jQuery and floatlabel
```HTML
  <!-- load jQuery -->
  <script src="http://code.jquery.com/jquery-2.1.0.min.js" /></script>
       
  <!-- load floatTable and its css -->
  <script src="floatlabel.jquery.js"></script>
  <link rel="stylesheet" type="text/css" href="floatlable.jquery.css">
```

### Initiate the plugin
```javascript
<script type="text/javascript">
            $( document ).ready(function() {
                    $('#example1').floatLabel();  
            });
</script>
```

### Optional parameters:
You can pass the following optional parameters based on your input sizes and preferences:
```javascript
leftOffset     : '0px',  //left attribute of label
topOffset      : '-14px'//top attribute of label
```