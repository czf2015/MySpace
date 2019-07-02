- specifies an input field where the user can enter data.

<input> elements are used within a <form> element to declare input controls that allow users to input data.

An input field can vary in many ways, depending on the type attribute.

### [attributes](https://www.quanzhanketang.com/tags/tag_input.html)

[autocomplete: on | off](https://www.quanzhanketang.com/tags/att_input_autocomplete.html)
> Autocomplete allows the browser to predict the value. When a user starts to type in a field, the browser should display options to fill in the field, based on earlier typed values.

**Note:** The autocomplete attribute works with the following <input> types: text, search, url, tel, email, password, datepickers, range, and color.

**Tip:** In some browsers you may need to activate an autocomplete function for this to work (Look under "Preferences" in the browser's menu).


[autofocus]
> The autofocus attribute is a boolean attribute.

When present, it specifies that an <input> element should automatically get focus when the page loads.


[disabled]
> A disabled input element is unusable and un-clickable.

The disabled attribute can be set to keep a user from using the <input> element until some other condition has been met (like selecting a checkbox, etc.). Then, a JavaScript could remove the disabled value, and make the <input> element usable.

**Tip:** Disabled <input> elements in a form will not be submitted.

**Note:** The disabled attribute will not work with <input type="hidden">.


[form: form_id]
> specifies one or more forms the <input> element belongs to.

**Tip:** The value of this attribute must be the id attribute of a <form> element in the same document.


[formnovalidate]
**Note:** The formnovalidate attribute can be used with type="submit".


[list: datalist_id](https://www.quanzhanketang.com/tags/att_input_list.html)
```html
//An <input> element with pre-defined values in a <datalist>
<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Google Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
``` 
> refers to a <datalist> element that contains pre-defined options for an <input> element.



[max: number | date]
[min: number | date]
```html
 <form action="demo_form.asp">

  Enter a date before 1980-01-01:
  <input type="date" name="bday" max="1979-12-31">

  Enter a date after 2000-01-01:
  <input type="date" name="bday" min="2000-01-02">

  Quantity (between 1 and 5):
  <input type="number" name="quantity" min="1" max="5">

  <input type="submit">

</form> 
```
> **Tip:** Use the max attribute together with the min attribute to create a range of legal values.

**Note:** The max and min attributes works with the following input types: number, range, date, datetime, datetime-local, month, time and week.


[maxlength: number]
> specifies the maximum number of characters allowed in the <input> element.Default value is 524288.


[name: text]
> The name attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted.

**Note:** Only form elements with a name attribute will have their values passed when submitting a form.


[pattern: regexp]
```html
<form action="demo_form.asp">
  Country code: 
  <input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">
  <input type="submit">
</form>
```
> specifies a regular expression that the <input> element's value is checked against.

**Note:** The pattern attribute works with the following input types: text, date, search, url, tel, email, and password.

**Tip:** Use the global title attribute to describe the pattern to help the user.


[palceholder: text]
> specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format).

The short hint is displayed in the input field before the user enters a value.

**Note:** The placeholder attribute works with the following input types: text, search, url, tel, email, and password.


[readonly]
> A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).

The readonly attribute can be set to keep a user from changing the value until some other conditions have been met (like selecting a checkbox, etc.). Then, a JavaScript can remove the readonly value, and make the input field editable.


[required]
> specifies that an input field must be filled out before submitting the form.

**Note:** The required attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file.


[size: number]
> specifies the visible width, in characters, of an <input> element. Default value is 20.

**Note:** The size attribute works with the following input types: text, search, tel, url, email, and password.

**Tip:** To specify the maximum number of characters allowed in the <input> element, use the maxlength attribute.


[step: number]
```html
<form action="demo_form.asp">
  <input type="number" name="points" step="3">
  <input type="submit">
</form> 
```
> specifies the legal number intervals for an <input> element.

Example: if step="3", legal numbers could be -3, 0, 3, 6, etc.

**Tip:** The step attribute can be used together with the max and min attributes to create a range of legal values.

**Note:** The step attribute works with the following input types: number, range, date, datetime, datetime-local, month, time and week.



[value: text]
> specifies the value of an <input> element.

The value attribute is used differently for different input types:
1. For "button", "reset", and "submit" - it defines the text on the button;
2. For "text", "password", and "hidden" - it defines the initial (default) value of the input field;
3. For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit).

**Note:** The value attribute cannot be used with <input type="file">.


[type: button | checkbox | color | date | datetime | datetime-local | email | file | ](https://www.quanzhanketang.com/tags/att_input_type.html)
- button
- checkbox
[checked]
> The checked attribute can be used with <input type="checkbox"> and <input type="radio">.

When present, it specifies that an <input> element should be pre-selected (checked) when the page loads.

The checked attribute can also be set after the page load, with a JavaScript.


- color
- date
- datetime
- datetime-local
- email
[multiple]
```html
<form action="demo_form.asp">
  Select images: <input type="file" name="img" multiple>
  <input type="submit">
</form> 
```
> specifies that the user is allowed to enter more than one value in the <input> element.

**Note:** The multiple attribute works with the following input types: email, and file.

**Tip:** For <input type="file">: to select multiple files, hold down the CTRL or SHIFT key while selecting.

**Tip:** For <input type="email">: separate each email with a comma, like: mail@example.com, mail2@example.com, mail3@example.com in the email field.



- file
[accept: file_extension | audio/* | video/* | image/* | media_type"](https://www.quanzhanketang.com/tags/att_input_accept.html)


[multiple]
```html
<form action="demo_form.asp">
  Select images: <input type="file" name="img" multiple>
  <input type="submit">
</form> 
```
> specifies that the user is allowed to enter more than one value in the <input> element.

**Note:** The multiple attribute works with the following input types: email, and file.

**Tip:** For <input type="file">: to select multiple files, hold down the CTRL or SHIFT key while selecting.

**Tip:** For <input type="email">: separate each email with a comma, like: mail@example.com, mail2@example.com, mail3@example.com in the email field.


- hidden
- image
[alt: text](https://www.quanzhanketang.com/tags/att_input_alt.html)


[formaction: URL](https://www.quanzhanketang.com/tags/att_input_formaction.html)
```html
//An HTML form with two submit buttons, with different actions:
<form action="demo_form.asp">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit"><br>
  <input type="submit" formaction="demo_admin.asp" value="Submit as admin">
</form> 
```
> specifies the URL of the file that will process the input control when the form is submitted.

The formaction attribute overrides the action attribute of the <form> element.

**Note:** The formaction attribute is used with type="submit" and type="image".


[formenctype: application/x-www-form-urlencoded | multipart/form-data | text/plain]
> specifies how the form-data should be encoded when submitting it to the server (only for forms with method="post")

The formenctype attribute overrides the enctype attribute of the <form> element.

**Note:** The formenctype attribute is used with type="submit" and type="image".
1. application/x-www-form-urlencoded: Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values);
2. multipart/form-data: No characters are encoded;
3. text/plain: Spaces are converted to "+" symbols, but no special characters are encoded.


[formmethod: get | post](https://www.quanzhanketang.com/tags/att_input_formmethod.html)
> defines the HTTP method for sending form-data to the action URL.

The formmethod attribute overrides the method attribute of the <form> element.

**Note:** The formmethod attribute can be used with type="submit" and type="image".
1. get:
This method appends the form-data to the URL in name/value pairs;

This method is useful for form submissions where a user want to bookmark the result;

There is a limit to how much data you can place in a URL (varies between browsers), therefore, you cannot be sure that all of the form-data will be correctly transferred;

Never use the "get" method to pass sensitive information! (password or other sensitive information will be visible in the browser's address bar);

2. post:
This method sends the form-data as an HTTP post transaction;

Form submissions with the "post" method cannot be bookmarked;

The "post" method is more robust and secure than "get", and "post" does not have size limitations.


[formtarget: _self | _blank | _parent | _top | framename]


[src: URL]
```html
<form action="demo_form.asp">
  First name: <input type="text" name="fname"><br>
  <input type="image" src="submit.gif" alt="Submit">
</form> 
```
> specifies the URL of the image to use as a submit button.

**Note:** The src attribute is required for <input type="image">, and can only be used with <input type="image">.


[height: pixels]
[width: pixels]
> **Tip:** Always specify both the height and width attributes for images. If height and width are set, the space required for the image is reserved when the page is loaded. However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it. The effect will be that the page layout will change during loading (while the images load).


- month
- number
- password
- radio
[checked]
> The checked attribute can be used with <input type="checkbox"> and <input type="radio">.

When present, it specifies that an <input> element should be pre-selected (checked) when the page loads.

The checked attribute can also be set after the page load, with a JavaScript.


- range
- reset
- search
- submit
[formaction: URL](https://www.quanzhanketang.com/tags/att_input_formaction.html)
```html
//An HTML form with two submit buttons, with different actions:
<form action="demo_form.asp">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit"><br>
  <input type="submit" formaction="demo_admin.asp" value="Submit as admin">
</form> 
```
> specifies the URL of the file that will process the input control when the form is submitted.

The formaction attribute overrides the action attribute of the <form> element.

**Note:** The formaction attribute is used with type="submit" and type="image".


[formenctype: application/x-www-form-urlencoded | multipart/form-data | text/plain]
> specifies how the form-data should be encoded when submitting it to the server (only for forms with method="post")

The formenctype attribute overrides the enctype attribute of the <form> element.

**Note:** The formenctype attribute is used with type="submit" and type="image".
1. application/x-www-form-urlencoded: Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values);
2. multipart/form-data: No characters are encoded;
3. text/plain: Spaces are converted to "+" symbols, but no special characters are encoded.


[formmethod: get | post](https://www.quanzhanketang.com/tags/att_input_formmethod.html)
> defines the HTTP method for sending form-data to the action URL.

The formmethod attribute overrides the method attribute of the <form> element.

**Note:** The formmethod attribute can be used with type="submit" and type="image".
1. get:
This method appends the form-data to the URL in name/value pairs;

This method is useful for form submissions where a user want to bookmark the result;

There is a limit to how much data you can place in a URL (varies between browsers), therefore, you cannot be sure that all of the form-data will be correctly transferred;

Never use the "get" method to pass sensitive information! (password or other sensitive information will be visible in the browser's address bar);

2. post:
This method sends the form-data as an HTTP post transaction;

Form submissions with the "post" method cannot be bookmarked;

The "post" method is more robust and secure than "get", and "post" does not have size limitations.


[formtarget: _self _blank | | _parent | _top | framename]



- tel
- text
- time
- url
- week
