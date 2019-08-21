package com.omniwyse.booksapi.schedulers;

import com.omniwyse.booksapi.services.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class ScheduledTasks {

    private static final Logger LOGGER = LoggerFactory.getLogger(ScheduledTasks.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

    @Autowired
    private EmailService emailService;
    /*@Scheduled(initialDelay = 1000,fixedRate = 10000*6)
    public void getCheckedOutDetails(){
        System.out.println("Scheduler called "+dateFormat.format(new Date()));
    }*/

    //@Scheduled(fixedRate = 50000*6)
    @Scheduled(cron = "0 0/30 18 * * *") //This means at 12 AM every day UTC time 6:30 PM --> IST 12 AM
    public void getCheckedOutDetails(){
        LOGGER.info("Scheduler called :: sending due books reminder mails on : "+dateFormat.format(new Date()));
        emailService.sendEmailRemindersForDueBooks();
    }
}
