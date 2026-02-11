<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Enquiry extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $form_name;
    public $form_email;
    public $form_message;
    public $form_phone;

    public function __construct($form_name, $form_email, $form_phone, $form_message)
    {
        $this->form_name    = $form_name;
        $this->form_email   = $form_email;
        $this->form_message = $form_message;
        $this->form_phone   = $form_phone;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->subject('New Enquiry from '.$this->form_name)
        ->markdown('emails.enquiries');
    }
}
