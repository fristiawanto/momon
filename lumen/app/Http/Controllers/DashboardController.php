<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function Dashboard(){
        return response()->json(['status'=> 'succes', 'message' => 'Dashboard OK']);
    }
}
