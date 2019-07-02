 JS表单验证-12个常用的JS表单验证

JS表单验证-12个常用的JS表单验证

   最近有个项目用到了表单验证，小编在项目完结后的这段时间把常用的JS表单验证demo整理了一下，和大家一起分享~~~

1. 长度限制

<p>1. 长度限制</p>
<form name=a onsubmit="return test()">
<textarea name="b" cols="40" rows="6" placeholder="不能超过50个字符！"></textarea>
<br />
<input type="submit" name="Submit" value="check">
</form>

<script language="javascript">
function test()
{
if(document.a.b.value.length>50)
{
alert("不能超过50个字符！");
document.a.b.focus();
return false;
}
}
</script>

 

2. 只能是汉字 

<p>2. 只能是汉字 </p>
<input type="text" onblur="isChinese(this.value)" placeholder="请输入中文！" />

<script language="javascript">
function isChinese(obj){
var reg=/^[\u0391-\uFFE5]+$/;
if(obj!=""&&!reg.test(obj)){
alert('必须输入中文！');
return false;
}
}

</script>

 

以下demo中的HTML的结构与验证中文结构相似的，小编就只写js啦~~~

 

3. 只能是英文字母 

<script type="text/javascript">
//验证只能是字母
function checkZm(zm){
var zmReg=/^[a-zA-Z]*$/;
if(zm!=""&&!zmReg.test(zm)){
alert("只能是英文字母！");
return false;
}
}
</script>

 

4. 只能是数字 

<script language=javascript>
//验证只能为数字
function checkNumber(obj){
var reg = /^[0-9]+$/;
if(obj!=""&&!reg.test(obj)){
alert('只能输入数字！');
return false;
}
}
</script>

 

5. 只能是英文字母和数字 

<script type="text/javascript">
//验证只能是字母和数字
function checkZmOrNum(zmnum){
var zmnumReg=/^[0-9a-zA-Z]*$/;
if(zmnum!=""&&!zmnumReg.test(zmnum)){
alert("只能输入是字母或者数字,请重新输入");
return false;
}
}
</script>

 

6. 检验时间大小(与当前时间比较)

 

<script type="text/javascript">
//检验时间大小(与当前时间比较)
function checkDate(obj){
var obj_value=obj.replace(/-/g,"/");//替换字符，变成标准格式(检验格式为：'2009-12-10')
// var obj_value=obj.replace("-","/");//替换字符，变成标准格式(检验格式为：'2010-12-10 11:12')
var date1=new Date(Date.parse(obj_value));
var date2=new Date();//取今天的日期
if(date1>date2){
alert("不能大于当前时间！");
return false;
}
}
</script>

 

7. 屏蔽关键字(这里屏蔽***和****)

<script type="text/javascript">
function test(obj) {
if((obj.indexOf ("***") == 0)||(obj.indexOf ("****") == 0)){
alert("屏蔽关键字(这里屏蔽***和****)！");
return false;}
}
</script>

 

8. 两次输入密码是否相同 

<script type="text/javascript">
function check(){
with(document.all){
if(input1.value!=input2.value)
{
alert("密码不一致")
input1.value = "";
input2.value = "";
}
else {
alert("密码一致");
document.forms[0].submit();
}
}
}
</script>

 

9. 表单项不能为空 

<script language="javascript">
function CheckForm(obj)
{
if (obj.length == 0) {
alert("姓名不能为空!");
return false;
}
return true;
alert("姓名不能为空!");
}
</script>

 

10. 邮箱验证

<script language="javascript">
function test(obj){
//对电子邮件的验证
var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
if(!myreg.test(obj))
{
alert('请输入有效的邮箱！');
return false;
}
}
</script>

 

11. 验证手机号

<script type="text/javascript">
function validatemobile(mobile)
{
if(mobile.length==0)
{
alert('手机号码不能为空！');
return false;
}
if(mobile.length!=11)
{
alert('请输入有效的手机号码，需是11位！');
return false;
}

var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
if(!myreg.test(mobile))
{
alert('请输入有效的手机号码！');
return false;
}
}
</script>

 

12. 验证身份证号码（需是有效身份证）

<script type="text/javascript">
// 构造函数，变量为15位或者18位的身份证号码
function clsIDCard(CardNo) {
this.Valid=false;
this.ID15='';
this.ID18='';
this.Local='';
if(CardNo!=null)this.SetCardNo(CardNo);
}

// 设置身份证号码，15位或者18位
clsIDCard.prototype.SetCardNo = function(CardNo) {
this.ID15='';
this.ID18='';
this.Local='';
CardNo=CardNo.replace(" ","");
var strCardNo;
if(CardNo.length==18) {
pattern= /^\d{17}(\d|x|X)$/;
if (pattern.exec(CardNo)==null)return;
strCardNo=CardNo.toUpperCase();
} else {
pattern= /^\d{15}$/;
if (pattern.exec(CardNo)==null)return;
strCardNo=CardNo.substr(0,6)+'19'+CardNo.substr(6,9)
strCardNo+=this.GetVCode(strCardNo);
}
this.Valid=this.CheckValid(strCardNo);
}

// 校验身份证有效性
clsIDCard.prototype.IsValid = function() {
return this.Valid;
}

// 返回生日字符串，格式如下，1981-10-10
clsIDCard.prototype.GetBirthDate = function() {
var BirthDate='';
if(this.Valid)BirthDate=this.GetBirthYear()+'-'+this.GetBirthMonth()+'-'+this.GetBirthDay();
return BirthDate;
}

// 返回生日中的年，格式如下，1981
clsIDCard.prototype.GetBirthYear = function() {
var BirthYear='';
if(this.Valid)BirthYear=this.ID18.substr(6,4);
return BirthYear;
}

// 返回生日中的月，格式如下，10
clsIDCard.prototype.GetBirthMonth = function() {
var BirthMonth='';
if(this.Valid)BirthMonth=this.ID18.substr(10,2);
if(BirthMonth.charAt(0)=='0')BirthMonth=BirthMonth.charAt(1);
return BirthMonth;
}

// 返回生日中的日，格式如下，10
clsIDCard.prototype.GetBirthDay = function() {
var BirthDay='';
if(this.Valid)BirthDay=this.ID18.substr(12,2);
return BirthDay;
}

// 返回性别，1：男，0：女
clsIDCard.prototype.GetSex = function() {
var Sex='';
if(this.Valid)Sex=this.ID18.charAt(16)%2;
return Sex;
}

// 返回15位身份证号码
clsIDCard.prototype.Get15 = function() {
var ID15='';
if(this.Valid)ID15=this.ID15;
return ID15;
}

// 返回18位身份证号码
clsIDCard.prototype.Get18 = function() {
var ID18='';
if(this.Valid)ID18=this.ID18;
return ID18;
}

// 返回所在省，例如：上海市、浙江省
clsIDCard.prototype.GetLocal = function() {
var Local='';
if(this.Valid)Local=this.Local;
return Local;
}

clsIDCard.prototype.GetVCode = function(CardNo17) {
var Wi = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
var Ai = new Array('1','0','X','9','8','7','6','5','4','3','2');
var cardNoSum = 0;
for (var i=0; i<CardNo17.length; i++)cardNoSum+=CardNo17.charAt(i)*Wi[i];
var seq = cardNoSum%11;
return Ai[seq];
}

clsIDCard.prototype.CheckValid = function(CardNo18) {
if(this.GetVCode(CardNo18.substr(0,17))!=CardNo18.charAt(17))return false;
if(!this.IsDate(CardNo18.substr(6,8)))return false;
var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
if(aCity[parseInt(CardNo18.substr(0,2))]==null)return false;
this.ID18=CardNo18;
this.ID15=CardNo18.substr(0,6)+CardNo18.substr(8,9);
this.Local=aCity[parseInt(CardNo18.substr(0,2))];
return true;
}

clsIDCard.prototype.IsDate = function(strDate) {
var r = strDate.match(/^(\d{1,4})(\d{1,2})(\d{1,2})$/);
if(r==null)return false;
var d= new Date(r[1], r[2]-1, r[3]);
return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[2]&&d.getDate()==r[3]);
}


function valiIdCard(idCard){
var checkFlag = new clsIDCard(idCard);
if (!checkFlag.IsValid()) {
alert("输入的身份证号无效,请输入真实的身份证号！");
document.getElementByIdx("idCard").focus();
return false;
}else{
alert("是有效身份证！");
}
}
</script>