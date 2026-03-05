@component('mail::message')
# Welcome to {{ config('app.name') }}

Dear {{$form_name}},

We look forward to communicating more with you. For more information visit our blog.

Thanks,<br>
{{ config('app.name') }}
@endcomponent