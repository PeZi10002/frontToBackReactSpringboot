package com.pezi.demo;

import com.pezi.demo.model.Abteilung;
import com.pezi.demo.model.Mitarbeiter;
import com.pezi.demo.repository.AbteilungsRepository;
import com.pezi.demo.repository.MitarbeiterRepository;

import org.hibernate.boot.model.relational.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final AbteilungsRepository aRepo;
    private final MitarbeiterRepository mRepo;

    @Autowired
    public DatabaseLoader(MitarbeiterRepository mRepo, AbteilungsRepository aRepo) {
        this.mRepo = mRepo;
        this.aRepo = aRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        this.aRepo.save(new Abteilung("Lager"));
        this.mRepo.save(new Mitarbeiter("Hans", "Wurst", aRepo.getOne(1)));

    }

}
