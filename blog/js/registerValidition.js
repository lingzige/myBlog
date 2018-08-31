$(function(){
	$('.error_tip').hide();

	var error_email = false;
	var error_phone = false;
	var error_name = false;
	var error_nickname = false;
	var error_pwd = false;
	var error_cpwd = false;

	// 验证邮箱
	$('.emailFrame').blur(function(){
		check_email();
	})

	$('.emailFrame').focus(function(){
		$(this).next().hide();
	})

	function check_email(){
		var val = $('.emailFrame').val();
		var re = /^(\d|a-zA-Z)(\w*\_*\w+)\@(qq|163|sina)\.(com)$/;
		if(val==''){
			$('.emailFrame').next().html('邮箱不能为空');
			$('.emailFrame').next().show();
			error_email = true;
			return;
		}

		if(re.test(val)){
			error_email = false;
		}
		else{
			error_email = true;
			$('.emailFrame').next().html('请输入正确的邮箱格式');
			$('.emailFrame').next().show();
		}
	}





	// 验证手机号
	$('.phoneFrame').blur(function(){
		check_phone();
	})

	$('.phoneFrame').focus(function(){
		$(this).next().hide();
	})

	function check_phone(){
		var val = $('.phoneFrame').val();
		var re = /^(1)(3|5|7|8)(\d){9}$/;
		if(val==''){
			$('.phoneFrame').next().html('手机号不能为空');
			$('.phoneFrame').next().show();
			error_phone = true;
			return;
		}

		if(re.test(val)){
			error_phone = false;
		}
		else{
			error_phone = true;
			$('.phoneFrame').next().html('请输入正确的格式');
			$('.phoneFrame').next().show();
		}
	}
	
	



	// 判断登录名称
	$('.loginnameFrame').blur(function(){
		check_loginname();
	})

	$('.loginnameFrame').focus(function(){
		$(this).next().hide();
	})

	function check_loginname(){
		var val = $('.loginnameFrame').val();
		var re = /^\w{4,8}$/;
		if(val==''){
			$('.loginnameFrame').next().html('登录名不能为空');
			$('.loginnameFrame').next().show();
			error_name = true;
			return;
		}

		if(re.test(val)){
			error_name = false;
		}
		else{
			error_name = true;
			$('.loginnameFrame').next().html('请输入正确的格式');
			$('.loginnameFrame').next().show();
		}
	}




	// 判断昵称
	$('.nicknameFrame').blur(function(){
		check_nickname();
	})

	$('.nicknameFrame').focus(function(){
		$(this).next().hide();
	})

	function check_nickname(){
		var val = $('.nicknameFrame').val();
		var re = /^\w{2,8}$/;
		if(val==''){
			$('.nicknameFrame').next().html('昵称不能为空');
			$('.nicknameFrame').next().show();
			error_nickname = true;
			return;
		}

		if(re.test(val)){
			error_nickname = false;
		}
		else{
			error_nickname = true;
			$('.nicknameFrame').next().html('请输入正确的格式');
			$('.nicknameFrame').next().show();
		}
	}





	// 判断密码
	$('.passwordFrame').blur(function(){
		check_pwd();
	})

	$('.passwordFrame').focus(function(){
		$(this).next().hide();
	})

	function check_pwd(){
		var val = $('.passwordFrame').val();
		var re = /^[a-z0-9A-Z]$/;
		if(val==''){
			$('.passwordFrame').next().html('密码不能为空');
			$('.passwordFrame').next().show();
			error_pwd = true;
			return;
		}

		if(re.test(val)){
			error_pwd = false;
		}
		else{
			error_pwd = true;
			$('.passwordFrame').next().html('请输入正确的密码格式');
			$('.passwordFrame').next().show();
		}
	}

	$('.confirmFrame').blur(function(){
		check_cpwd();
	})

	$('.confirmFrame').focus(function(){
		$('this').next().hide();
	})




	// 判断确认密码和第一次输入的是否一样
	function check_cpwd(){
		var val1 = $('.passwordFrame').val();
		var val2 = $('.confirmFrame').val();
		if(val2==''){
			$('.confirmFrame').next().html('确认密码不能为空');
			$('.confirmFrame').next().show();
			error_phone = true;
			return;
		}

		if(val1 == val2){
			error_cpwd = false;
		}
		else{
			error_cpwd = true;
			$('.confirmFrame').next().html('两次输入的密码不一致');
			$('.confirmFrame').next().show();
			
		}
	}

	$('.btn').submit(function(){
		check_email();
		check_phone();
		check_loginname();
		check_nickname();
		check_pwd();
		check_cpwd();

		if(!(error_email == false && error_phone == false && error_name == false && error_nickname == false
			&& error_pwd == false && error_cpwd == false)){
			return false;
		}
	})
	
})