package edu.gabrielferraz.ProjetoExtensaoIV.repository;

import edu.gabrielferraz.ProjetoExtensaoIV.entities.UserEntitie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntitie, UUID> {
}
