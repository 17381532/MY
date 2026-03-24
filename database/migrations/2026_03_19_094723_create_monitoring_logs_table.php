<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('monitoring_logs', function (Blueprint $table) {
            $table->id();
            $table->enum('location', ['BMDH', 'SBAH']);
            $table->enum('system_type', ['FBU', 'Surgical Case']);
            $table->dateTime('monitoring_date');
            $table->string('monitored_by');
            $table->enum('status', ['up', 'down']);
            $table->text('notes')->nullable();
            
            // Backup information
            $table->string('backup_location')->nullable();
            $table->string('backup_file')->nullable();
            $table->string('backup_file_name')->nullable();
            $table->integer('backup_file_size')->nullable();
            $table->string('backup_checksum')->nullable();
            
            // Performance metrics
            $table->integer('response_time_ms')->nullable();
            $table->integer('cpu_usage')->nullable();
            $table->integer('memory_usage')->nullable();
            $table->integer('disk_usage')->nullable();
            
            // Error handling
            $table->string('error_code')->nullable();
            $table->text('error_message')->nullable();
            
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('monitoring_logs');
    }
};