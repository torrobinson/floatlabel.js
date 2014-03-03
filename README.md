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

| Option        | Description                                       | Default |
|---------------|---------------------------------------------------|:---------:|
| leftOffset    | Left offset. Use for adjusting label positioning. | 0px     |
| topOffset     | Top offset. Use for adjusting label positioning.  | 0px     |
| fontSize      | Font size of the label created                    | 9px     |
| color         | Color of the label when it appears                |![color](http://www.torrobinson.com/files/image-sg1A2qEB2q.png)|
| colorInactive | Color of the label when it is no longer active    |![color](http://www.torrobinson.com/files/image-GBn5Rti5fw.png)|