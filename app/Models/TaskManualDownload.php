<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskManualDownload extends Model
{
    protected $connection = 'sqlite';    
    protected $table = 'tasks_manual_downloads';
}
