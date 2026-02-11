<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Subscribe;
use App\Mail\Enquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class PageController extends Controller
{
    //
    public function index() {
        return view('home');
    }

    public function aboutUs() {
        return view('about');
    }

    public function services() {
        return view('services');
    }

    public function contact() {
        return view('contact');
    }
    
    public function contactMail(Request $request) {

        $validator = Validator::make($request->all(), [
            'form_name' => 'required',
            'form_email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'false', 'message' => $validator->errors()->first()]);
        } 

        Mail::to($request->form_email)->send(new Subscribe($request->form_name));
        Mail::to(env('ADMIN_EMAIL'))->send(new Enquiry($request->form_name, $request->form_email, $request->form_phone, $request->form_message));

        return response()->json(['status' => 'true', 'message' => 'Thank you! We will contact you soon!']);
    }
    
    
    
    

    public function icon1() {
        return view('icon.icon1');
    }
    public function icon2() {
        return view('icon.icon2');
    }
    public function icon3() {
        return view('icon.icon3');
    }

}
