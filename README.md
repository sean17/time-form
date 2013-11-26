time-form
=========

Track the time it takes a user to complete a form (with JQuery)


##How to use
`timeTracker(element-id, callback);`

e.g:

`<input type="textArea" id="test"></input>`

`timeTracker('test', function(result){console.log('result', result)});`

You can optionally pass in an array of ids to track.  Note that the callback will be attached to each node, rather than the group of nodes.
