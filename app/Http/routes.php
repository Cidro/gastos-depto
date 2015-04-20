<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use Illuminate\Http\Request;

$app->get('/', function() use ($app) {
    return view('layout');
});
$app->post('/records', function(Request $request) use ($app) {
    $input = $request->json()->all();
    $input['id'] = time();
    $input['synced'] = true;
    sleep(2);
    return response()->json($input);
});