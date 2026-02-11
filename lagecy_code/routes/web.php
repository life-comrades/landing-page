<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@index')->name('home');
Route::get('about-us', 'PageController@aboutUs')->name('about');
Route::get('services', 'PageController@services')->name('services');
Route::get('contact-us', 'PageController@contact')->name('contact');

Route::get('icon1', 'PageController@icon1');
Route::get('icon2', 'PageController@icon2');
Route::get('icon3', 'PageController@icon3');

Route::post('contact-mail', 'PageController@contactMail')->name('contact-mail');

