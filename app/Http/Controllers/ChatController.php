<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repositories\Contracts\ChatRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Ssr\Response;

class ChatController extends Controller
{
    public function __construct(
        private readonly ChatRepositoryInterface $repository
    )
    {}

    public function send():void{
        $this->repository->send();
    }
}
