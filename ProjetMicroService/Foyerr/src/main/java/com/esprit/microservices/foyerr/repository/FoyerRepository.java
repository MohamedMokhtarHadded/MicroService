package com.esprit.microservices.foyerr.repository;

import com.esprit.microservices.foyerr.entities.Foyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoyerRepository extends JpaRepository<Foyer,Integer> {
}
