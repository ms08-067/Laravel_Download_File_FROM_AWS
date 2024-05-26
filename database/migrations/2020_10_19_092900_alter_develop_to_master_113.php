<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AlterDevelopToMaster113 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    	/**Add a new column to hold the xml delivery time and adjusted delivery time .*/
        Schema::create('bypass_filecountcheck_force_notify_s3', function (Blueprint $table) {
            $table->unsignedInteger('case_id')->nullable()->default(NULL)->comment('manually bypass the case_id file amount count step of jobdirectory and s3 ready folder and simply notify job is uploaded via rocketchat');
        });

        $data = [
            [
                'case_id' => NULL,
            ],
        ];

        DB::table('bypass_filecountcheck_force_notify_s3')->delete();
        DB::table('bypass_filecountcheck_force_notify_s3')->insert($data);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    	/***/
    	/***/
    }
}
