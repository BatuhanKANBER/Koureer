# Koureer

Koureer, mobil kariyer yönetimi için geliştirilmiş bir uygulamadır. Kullanıcıların kariyer hedeflerini belirlemelerine, ilerlemelerini izlemelerine ve iş fırsatlarına erişmelerine yardımcı olur.

## Özellikler

- **Kariyer Takibi**: Kullanıcıların kariyer hedeflerini belirlemelerine ve ilerlemelerini izlemelerine yardımcı olur.
- **İş Başvuruları**: Farklı iş ilanlarını görüntüleme ve başvuru yapma imkanı sunar.
- **Profil Yönetimi**: Kullanıcıların profesyonel profillerini oluşturup güncellemelerini sağlar.

## Kurulum

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/BatuhanKANBER/Koureer.git
```

### 2. Backend Bağımlılıklarını Yükleyin

Backend bağımlılıklarını yüklemek için `backend` dizinine gidin ve aşağıdaki komutu çalıştırın:

```bash
cd backend
# Bağımlılıkları yükleyin
# Örneğin:
mvn install
```

### 3. Frontend Bağımlılıklarını Yükleyin

Frontend bağımlılıklarını yüklemek için `frontend` dizinine gidin ve aşağıdaki komutu çalıştırın:

```bash
cd frontend
# Bağımlılıkları yükleyin
# Örneğin:
npm install
```

## Kullanım

1. **Backend Sunucusunu Başlatın:**

   ```bash
   # Örneğin:
   mvn spring-boot:run
   ```

2. **Frontend Sunucusunu Başlatın:**

   ```bash
   npm start
   ```

3. Tarayıcınızdan uygulamaya erişin:

   ```
   http://localhost:3000
   ```

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Eğer projeye katkıda bulunmak isterseniz şu adımları izleyebilirsiniz:

1. Bu repoyu fork edin.
2. Yeni bir branch oluşturun:

   ```bash
   git checkout -b feature/yenilik
   ```

3. Yaptığınız değişiklikleri commit edin:

   ```bash
   git commit -m "Yeni bir özellik ekledim."
   ```

4. Branch'i push edin:

   ```bash
   git push origin feature/yenilik
   ```

5. Bir Pull Request oluşturun.

## Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.
