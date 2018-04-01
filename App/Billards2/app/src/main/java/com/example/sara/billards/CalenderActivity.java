package com.example.sara.billards;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.CalendarView;
import android.widget.Toast;

public class CalenderActivity extends AppCompatActivity {
    CalendarView calendar;
    String date;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calender);

        calendar=(CalendarView) findViewById(R.id.calendar);
        calendar.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
            @Override
            public void onSelectedDayChange(@NonNull CalendarView view, int year, int month, int dayOfMonth) {
                date= year+"/"+(month+1)+"/"+dayOfMonth; //format of date->date_id
                Toast.makeText(getBaseContext(),"Selected date:"+date, Toast.LENGTH_LONG).show();
                Bundle bundle = new Bundle();
                bundle.putString("date", date);
                setResult(RESULT_OK, new Intent().putExtras(bundle));
                finish();
            }
        });
    }

    public String getDate() {
        return date;
    }
}
