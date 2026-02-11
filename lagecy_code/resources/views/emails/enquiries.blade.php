@component('mail::message')
# Welcome to {{ config('app.name') }}

Dear Admin,

We Received an enquiry!

Name: {{$form_name}}<br>
Email: {{$form_email}}<br>
Message: {{$form_message}}<br>
@if($form_phone)
Phone: {{$form_phone}}<br>
@endif
Thanks,<br>
{{ config('app.name') }}
@endcomponent