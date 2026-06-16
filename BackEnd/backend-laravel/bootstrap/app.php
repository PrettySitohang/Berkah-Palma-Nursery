<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
<<<<<<< HEAD
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
=======
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
>>>>>>> 1beaee042a12c6b24688ba99174db29768e0d5d5
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->shouldRenderJsonWhen(
<<<<<<< HEAD
            fn (Request $request) => $request->is('api/*'),
=======
            fn(Request $request) => $request->is('api/*'),
>>>>>>> 1beaee042a12c6b24688ba99174db29768e0d5d5
        );
    })->create();
