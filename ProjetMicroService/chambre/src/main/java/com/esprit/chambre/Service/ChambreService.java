package com.esprit.chambre.Service;

import com.esprit.chambre.Entity.Chambre;
import com.esprit.chambre.Repository.ChambreRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChambreService {
    @Autowired
    private ChambreRepo chambreRepo;

    public List<Chambre> retrieveAllChambres() {return chambreRepo.findAll();}

    public Chambre addChambre(Chambre chambre) {
        return chambreRepo.save(chambre);
    }

    public Chambre updateChambre(Long idChambre, Chambre newChambre) {
        if (chambreRepo.findById(idChambre).isPresent()) {
            Chambre existingChambre = chambreRepo.findById(idChambre).get();
            existingChambre.setNumeroChambre(newChambre.getNumeroChambre());
            existingChambre.setTypeC(newChambre.getTypeC());
            return chambreRepo.save(existingChambre);
        } else
            return null;
    }
    public String deleteChambre(Long idChambre) {
        if (chambreRepo.findById(idChambre).isPresent()) {
            chambreRepo.deleteById(idChambre);
            return "chambre supprimé";
        } else
            return "chambre non supprimé";
    }
}
