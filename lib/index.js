function timeTracker(inputs, next)
{
	function track(string)
	{
		var start,
			end,
			focused = 0;
		string = string;
		$("#"+string).focus(function()
		{
			start = Date.now();
			focused++;
			console.log('focused'+focused);
		});
		$("#"+string).change(function()
		{
			end = Date.now();
			console.log('Start is: '+start+' and the end is: '+end+', making the total time to complete the form: '+(end-start)/1000);
			if(typeof next ==='function')
			{
				var result = {id:string, time:((end-start)/1000)};
				if(focused>1)
					result.focused = focused;
				return next(result);
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