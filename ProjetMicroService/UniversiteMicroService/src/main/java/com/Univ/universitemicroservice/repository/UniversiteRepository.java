package com.Univ.universitemicroservice.repository;

import com.Univ.universitemicroservice.entities.Universite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UniversiteRepository extends JpaRepository<Universite,Integer> {

    Universite findUniversiteByNomUniversite(String nom);

    Universite findUniversiteById(int id);



}
