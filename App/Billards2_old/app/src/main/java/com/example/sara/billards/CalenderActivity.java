package com.example.sara.billards;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.CalendarView;
import android.widget.Toast;

public class CalenderActivity extends AppCompatActivity {
CalendarView calendar;
    Context context;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calender);

        calendar=(CalendarView) findViewById(R.id.calendar);
        calendar.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
            @Override
            public void onSelectedDayChange(@NonNull CalendarView view, int year, int month, int dayOfMonth) {
                Toast.makeText(getBaseContext(),"selected date:"+year+"/"+month+"/"+dayOfMonth,Toast.LENGTH_LONG).show();

                String date= year+"/"+month+"/"+dayOfMonth; //format of date->date_id

                Toast.makeText(getBaseContext(),"get date:"+date,Toast.LENGTH_LONG).show();
                context = getApplicationContext();
                Intent intent = new Intent(context, HoursActivity.class);
                startActivity(intent);
            }
        });
    }
}
