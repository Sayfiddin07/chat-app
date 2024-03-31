<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class BoardController
{
    public function index()
    {
        $users = User::query()->where('id', '!=', auth()->user()->id)->get();
        return Inertia::render('Chat', compact('users'));
    }
}
