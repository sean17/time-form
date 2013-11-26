function timeTracker(inputs, next)
{
	function track(string)
	{
		var start,
			end;
		string = string;
		$("#"+string).focus(function()
		{
			start = Date.now();
		});
		$("#"+string).change(function()
		{
			end = Date.now();
			console.log('Start is: '+start+' and the end is: '+end+', making the total time to complete the form: '+(end-start)/1000);
			if(typeof next ==='function')
			{
				return next({id:string, time:((end-start)/1000)});
			}
		});
	}

	if(Array.isArray(inputs))
	{
		inputs.forEach(function(input)
		{
			track(input);
		});
	} else
	{
		track(inputs);
	}
}