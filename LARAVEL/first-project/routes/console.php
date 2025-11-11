<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('documentation', function () {
    $this->comment('Visit https://laravel.com/docs for full documentation.');
})->purpose('Display the Laravel documentation URL');

Artisan::command('build', function () {
    $this->comment('Building the project...');
    // Aquí puedes agregar los comandos necesarios para construir tu proyecto
    exec('npm run build');
    $this->comment('Project built successfully!');
})->purpose('Build the project');