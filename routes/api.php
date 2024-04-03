<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/reverse-string', function (Illuminate\Http\Request $request) {
    $someString = $request->input('data');
    return response()->json(['reversedString' => strrev($someString)]);
});
