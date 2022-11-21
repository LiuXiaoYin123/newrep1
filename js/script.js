function getApi(username,password,step){
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', 'https://apis.jxcxin.cn/api/mi?user='+username+'&password='+password+'&step='+step, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText;//获取到json字符串，还需解析
				obj = JSON.parse(json);
				// console.log(obj['code']);
				// console.log(obj['msg']);
				// console.log(obj['asdasd']);
    //             console.log(typeof(obj));
				alert(obj['msg']);
            }
        };
}

function submit(){
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let step = document.getElementById('step').value;
	// json = '{"code" : 2000,"msg" : "test","statu" : "ok"}'
	if(username == ""){
		alert("请填写账号");
	}else if(password == ""){
		alert("请填写密码");
	}else if(step == ""){
		alert("请填写步数");
	}else{
		console.log(username);
		console.log(password);
		console.log(step);
		// obj = JSON.parse(json);
		// console.log(obj['code']);
		// console.log(obj['msg']);
		// alert(obj['staatu']);
		getApi(username,password,step);
	}
}
