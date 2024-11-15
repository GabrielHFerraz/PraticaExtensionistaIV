package edu.gabrielferraz.ProjetoExtensaoIV.service;

import edu.gabrielferraz.ProjetoExtensaoIV.entities.UserEntitie;
import edu.gabrielferraz.ProjetoExtensaoIV.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateUserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntitie save(UserEntitie user) {
        return this.userRepository.save(user);
    }

}
