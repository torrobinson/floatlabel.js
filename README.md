<h1 align="center">floatlabel.js</h1>
<p align="center">
  <img src="http://www.torrobinson.com/files/floatlabelgif2-BUEfAyKT0q.gif" />
</p>


<h3>Demo</h3>
http://torrobinson.com/floatlabel/examples/examples.html

<h3>Usage</h3>
<h4>Wrap inputs in a container</h4>
```HTML
 <div id="example1">
                <input type="text" id="fname" placeholder="First name"  />  <br/>
                <input type="text" id="mname" placeholder="Middle Name" />  <br/>
                <input type="text" id="lname" placeholder="Last name"   />  <br/>
 </div>
```
<h4>Include jQuery and floatlabel</h4>
```HTML
  <!-- load jQuery -->
  <script src="http://code.jquery.com/jquery-2.1.0.min.js" /></script>
       
  <!-- load floatTable and its css -->
  <script src="floatlabel.jquery.js"></script>
  <link rel="stylesheet" type="text/css" href="floatlabel.jquery.css">
```

<h4>Initiate the plugin</h4>
```javascript
$( document ).ready(function() {
     $('#example1').floatLabel();  
});
```

<h4>Optional parameters:</h4>
You can pass the following optional parameters based on your input sizes and preferences:

| Option        | Description                                       | Default |
|---------------|---------------------------------------------------|:---------:|
| leftOffset    | Left offset. Use for adjusting label positioning. | 0px     |
| topOffset     | Top offset. Use for adjusting label positioning.  | 0px     |
| fontSize      | Font size of the label created                    | 9px     |
| color         | Color of the label when it appears                |![color](http://www.torrobinson.com/files/image-GBn5Rti5fw.png)|
| colorInactive | Color of the label when it is no longer active    |![color](http://www.torrobinson.com/files/image-sg1A2qEB2q.png)|
| animationSpeed| How long the label shows/hides for (in milliseconds)| 125   |

Options are passed like so:
```javascript
$( document ).ready(function() {
     $('#example1').floatLabel({
                        option1     : 'value',
                        option2     : 'value2',
                          ...etc
                    });   
});
```

<h4>Compatibility</h4>
Chrome, Opera, Firefox, Safari, and IE9+ should work no problem with floatlabels.js
