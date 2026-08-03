(function () {
    const supportedLanguages = {
        en: 'English',
        es: 'Español',
        fr: 'Français',
        de: 'Deutsch'
    };

    const translations = {
        en: {
            'common.language': 'Language',
            'common.save': 'Save',
            'common.cancel': 'Cancel',
            'common.submit': 'Submit',
            'common.error': 'Error',
            'common.success': 'Success',
            'common.logout': 'Logout',
            'common.dashboard': 'Dashboard',
            'common.transfers': 'Transfers',
            'common.support': 'Support',
            'common.profile': 'Profile',
            'common.back': 'Back',
            'common.amount': 'Amount',
            'common.beneficiary': 'Beneficiary',
            'common.status': 'Status',
            'common.processing': 'Processing',
            'common.underReview': 'Under Review',
            'common.pendingVerification': 'Pending Verification',
            'common.completed': 'Completed',
            'common.visitBranch': 'Visit Nearest Branch',
            'common.availableBalance': 'Available balance',
            'common.currentBalance': 'Current balance',
            'common.currentStatus': 'Current status',
            'common.pinUpdated': 'PIN updated successfully.',
            'common.pinRequired': 'Transfer PIN required',
            'common.preferencesUpdated': 'Preferences updated successfully.',
            'common.processingStatus': 'Current status',
            'common.proceed': 'Proceed',
            'common.review': 'Review',
            'common.required': 'Required',
            'common.secure': 'Secure',
            'common.verified': 'Verified',
            'common.confirm': 'Confirm',
            'common.pleaseWait': 'Please wait',
            'common.accountSettings': 'Account Settings',
            'common.security': 'Security',
            'common.preferences': 'Preferences',
            'common.profileSettings': 'Profile Settings',
            'page.login.title': 'Secure Gateway',
            'page.login.signIn': 'Sign In to Dashboard',
            'page.login.email': 'Email Address',
            'page.login.password': 'Password',
            'page.login.forgot': 'Forgot?',
            'page.login.needAccount': 'Need an account?',
            'page.login.contactTeam': 'Contact our team',
            'page.login.statusMissing': 'Please enter your email and password.',
            'page.login.statusInvalidEmail': 'Please use a valid email address.',
            'page.login.statusPasswordLength': 'Password must be at least 6 characters.',
            'page.login.statusIncorrectPassword': 'Incorrect password. Please try again.',
            'page.login.statusPendingActivation': 'Account pending activation. Complete OTP verification with the administrator.',
            'page.login.statusAccessVerified': 'Access verified. Redirecting to your dashboard...',
            'page.transfer.title': 'New Transfer',
            'page.transfer.description': 'Securely prepare your next international payment.',
            'page.transfer.recipientName': 'Recipient Full Name',
            'page.transfer.accountNumber': 'Account Number / IBAN',
            'page.transfer.swift': 'SWIFT / BIC Code',
            'page.transfer.currency': 'Destination Currency',
            'page.transfer.priority': 'Priority',
            'page.transfer.amount': 'Amount to Send (USD)',
            'page.transfer.estimatedDelivery': 'Estimated delivery',
            'page.transfer.estimatedFee': 'Estimated fee',
            'page.transfer.proceed': 'Proceed to Review →',
            'page.transfer.pinTitle': 'Secure Transfer PIN',
            'page.transfer.pinCreate': 'Create transaction PIN',
            'page.transfer.pinEnter': 'Enter your transaction PIN',
            'page.transfer.pinCreatePrompt': 'Create a 4- or 6-digit PIN for secure transfers.',
            'page.transfer.pinConfirm': 'Confirm PIN',
            'page.transfer.currentPassword': 'Current password',
            'page.transfer.pinError': 'The PIN you entered is incorrect.',
            'page.transfer.pinMismatch': 'The PIN values do not match.',
            'page.transfer.pinInvalid': 'Please enter a 4- or 6-digit PIN.',
            'page.transfer.pinSuccess': 'PIN verified. Proceeding to review.',
            'page.transfer.alertIncomplete': 'Please complete all beneficiary details and enter a valid amount.',
            'page.transfer.alertBalance': 'The transfer amount exceeds your available balance.',
            'page.transfer.preparingReview': 'Preparing review...',
            'page.review.title': 'Final Authorization',
            'page.review.subtitle': 'Secure review before dispatch',
            'page.review.beneficiary': 'Beneficiary',
            'page.review.amount': 'Amount',
            'page.review.status': 'Transaction status',
            'page.review.confirm': 'Confirm & Dispatch',
            'page.review.processing': 'Your transfer is being prepared for processing.',
            'page.review.processingMessage': 'Your transfer is being prepared for processing.',
            'page.review.pinLabel': 'Transaction PIN',
            'page.review.pinPlaceholder': 'Enter your PIN',
            'page.review.pending': 'Awaiting secure confirmation',
            'page.review.completed': 'Transfer submitted successfully.',
            'page.pending.title': 'Security Verification',
            'page.pending.description': 'Your transfer is being reviewed and may require a quick verification step.',
            'page.pending.noTransfer': 'No pending transfer was found.',
            'page.pending.branch': 'Visit Local Branch',
            'page.pending.branchText': 'Bring identification to a verified branch if requested by our team.',
            'page.pending.support': 'Call Support',
            'page.pending.supportText': 'Contact our verification desk at +1 (800) ODIN-SEC.',
            'page.pending.return': 'Return to Dashboard',
            'page.success.title': 'Transfer Submitted',
            'page.success.subtitle': 'Your request has entered our secure processing queue.',
            'page.success.amount': 'Amount Sent',
            'page.success.recipient': 'To Recipient',
            'page.success.priority': 'Processing Priority',
            'page.success.arrival': 'Current Status',
            'page.success.receipt': 'A confirmation email with the full receipt has been sent to your registered address.',
            'page.success.emailNotice': 'A confirmation email with the full receipt has been sent to your registered address.',
            'page.success.download': 'Download Receipt',
            'page.success.back': 'Back to Dashboard',
            'page.profile.title': 'Account Settings',
            'page.profile.personalInfo': 'Personal Information',
            'page.profile.security': 'Security Settings',
            'page.profile.preferences': 'Communication Preferences',
            'page.profile.saveChanges': 'Save Changes',
            'page.profile.password': 'Change Account Password',
            'page.profile.pinTitle': 'Transaction PIN',
            'page.profile.pinSubtitle': 'Manage your secure transfer PIN.',
            'page.profile.currentPin': 'PIN is active',
            'page.profile.noPin': 'No PIN created yet',
            'page.profile.pinCurrentPassword': 'Current password',
            'page.profile.pinNew': 'New PIN',
            'page.profile.pinConfirm': 'Confirm PIN',
            'page.profile.pinChange': 'Update PIN',
            'page.profile.passwordIncorrect': 'The current password is incorrect.',
            'page.profile.preferencesEmail': 'Email alerts',
            'page.profile.preferencesSms': 'SMS updates',
            'page.profile.savePreferences': 'Save Preferences',
            'page.support.title': 'Secure Support Node',
            'page.support.subtitle': 'Your inquiry is routed through a protected channel and reviewed by our specialist team.',
            'page.support.transmit': 'Transmit Securely',
            'page.support.commonRequests': 'Common requests',
            'page.support.fullName': 'Full Name',
            'page.support.accountId': 'Account ID',
            'page.support.category': 'Inquiry Category',
            'page.support.message': 'Encrypted Message',
            'page.admin.title': 'Transfer Oversight',
            'page.admin.description': 'Approve requests, assign status, and set the visible transaction timestamp.',
            'page.admin.registerTitle': 'Register Client',
            'page.admin.registerDescription': 'Create a new account profile and assign an initial balance.',
            'page.admin.mobileMenu': 'Menu',
            'page.admin.toggleNav': 'Toggle navigation',
            'page.admin.applyDecision': 'Apply decision',
            'page.admin.registerUser': 'Register User',
            'page.admin.transferUpdated': 'Transfer updated successfully.',
            'page.admin.topupSuccess': 'Transaction successful.',
            'page.admin.otpRequired': 'Enter the OTP to approve registration.',
            'page.admin.otpIncorrect': 'The OTP entered is incorrect.',
            'page.admin.terminate': 'Terminate Session',
            'page.admin.clientDirectory': 'User Directory',
            'page.admin.vaults': 'Global Vaults',
            'page.admin.supportDesk': 'Support Desk',
            'page.admin.clientRegistry': 'Managed Client Registry',
            'page.admin.userManagement': 'User Management',
            'page.admin.searchClients': 'Search client...',
            'page.admin.topup': 'Top Up',
            'page.admin.message': 'Message',
            'page.admin.hold': 'Hold',
            'page.admin.release': 'Release'
        },
        es: {
            'common.language': 'Idioma',
            'common.save': 'Guardar',
            'common.cancel': 'Cancelar',
            'common.submit': 'Enviar',
            'common.error': 'Error',
            'common.success': 'Éxito',
            'common.logout': 'Cerrar sesión',
            'common.dashboard': 'Panel',
            'common.transfers': 'Transferencias',
            'common.support': 'Soporte',
            'common.profile': 'Perfil',
            'common.back': 'Volver',
            'common.amount': 'Monto',
            'common.beneficiary': 'Beneficiario',
            'common.status': 'Estado',
            'common.processing': 'Procesando',
            'common.underReview': 'En revisión',
            'common.pendingVerification': 'Pendiente de verificación',
            'common.completed': 'Completado',
            'common.visitBranch': 'Visite la sucursal más cercana',
            'common.availableBalance': 'Saldo disponible',
            'common.currentBalance': 'Saldo actual',
            'common.currentStatus': 'Estado actual',
            'common.pinUpdated': 'PIN actualizado correctamente.',
            'common.pinRequired': 'PIN de transferencia requerido',
            'common.preferencesUpdated': 'Preferencias actualizadas correctamente.',
            'common.processingStatus': 'Estado actual',
            'common.proceed': 'Continuar',
            'common.review': 'Revisar',
            'common.required': 'Requerido',
            'common.secure': 'Seguro',
            'common.verified': 'Verificado',
            'common.confirm': 'Confirmar',
            'common.pleaseWait': 'Espere',
            'common.accountSettings': 'Configuración de la cuenta',
            'common.security': 'Seguridad',
            'common.preferences': 'Preferencias',
            'common.profileSettings': 'Configuración del perfil',
            'page.login.title': 'Puerta segura',
            'page.login.signIn': 'Iniciar sesión',
            'page.login.email': 'Correo electrónico',
            'page.login.password': 'Contraseña',
            'page.login.forgot': '¿Olvidó?',
            'page.login.needAccount': '¿Necesita una cuenta?',
            'page.login.contactTeam': 'Contacte a nuestro equipo',
            'page.login.statusMissing': 'Ingrese su correo electrónico y contraseña.',
            'page.login.statusInvalidEmail': 'Use una dirección de correo válida.',
            'page.login.statusPasswordLength': 'La contraseña debe tener al menos 6 caracteres.',
            'page.login.statusIncorrectPassword': 'Contraseña incorrecta. Inténtelo de nuevo.',
            'page.login.statusPendingActivation': 'Cuenta pendiente de activación. Complete la verificación OTP con el administrador.',
            'page.login.statusAccessVerified': 'Acceso verificado. Redirigiendo a su panel...',
            'page.transfer.title': 'Nueva transferencia',
            'page.transfer.description': 'Prepare su próximo pago internacional de forma segura.',
            'page.transfer.recipientName': 'Nombre completo del beneficiario',
            'page.transfer.accountNumber': 'Número de cuenta / IBAN',
            'page.transfer.swift': 'Código SWIFT / BIC',
            'page.transfer.currency': 'Moneda de destino',
            'page.transfer.priority': 'Prioridad',
            'page.transfer.amount': 'Monto a enviar (USD)',
            'page.transfer.estimatedDelivery': 'Entrega estimada',
            'page.transfer.estimatedFee': 'Comisión estimada',
            'page.transfer.proceed': 'Continuar con la revisión →',
            'page.transfer.pinTitle': 'PIN seguro de transferencia',
            'page.transfer.pinCreate': 'Crear PIN de transacción',
            'page.transfer.pinEnter': 'Ingrese su PIN de transacción',
            'page.transfer.pinCreatePrompt': 'Cree un PIN de 4 o 6 dígitos para transferencias seguras.',
            'page.transfer.pinConfirm': 'Confirmar PIN',
            'page.transfer.currentPassword': 'Contraseña actual',
            'page.transfer.pinError': 'El PIN ingresado es incorrecto.',
            'page.transfer.pinMismatch': 'Los valores del PIN no coinciden.',
            'page.transfer.pinInvalid': 'Ingrese un PIN de 4 o 6 dígitos.',
            'page.transfer.pinSuccess': 'PIN verificado. Continuando con la revisión.',
            'page.transfer.alertIncomplete': 'Complete todos los datos del beneficiario e ingrese un monto válido.',
            'page.transfer.alertBalance': 'El monto de la transferencia excede su saldo disponible.',
            'page.transfer.preparingReview': 'Preparando la revisión...',
            'page.review.title': 'Autorización final',
            'page.review.subtitle': 'Revisión segura antes del envío',
            'page.review.beneficiary': 'Beneficiario',
            'page.review.amount': 'Monto',
            'page.review.status': 'Estado de la transacción',
            'page.review.confirm': 'Confirmar y enviar',
            'page.review.processing': 'Su transferencia está siendo preparada para procesamiento.',
            'page.review.processingMessage': 'Su transferencia está siendo preparada para procesamiento.',
            'page.review.pinLabel': 'PIN de transacción',
            'page.review.pinPlaceholder': 'Ingrese su PIN',
            'page.review.pending': 'Esperando confirmación segura',
            'page.review.completed': 'Transferencia enviada correctamente.',
            'page.pending.title': 'Verificación de seguridad',
            'page.pending.description': 'Su transferencia está siendo revisada y puede requerir una verificación rápida.',
            'page.pending.noTransfer': 'No se encontró ninguna transferencia pendiente.',
            'page.pending.branch': 'Visite la sucursal local',
            'page.pending.branchText': 'Lleve una identificación a una sucursal verificada si nuestro equipo lo solicita.',
            'page.pending.support': 'Llamar a soporte',
            'page.pending.supportText': 'Contacte al equipo de verificación al +1 (800) ODIN-SEC.',
            'page.pending.return': 'Volver al panel',
            'page.success.title': 'Transferencia enviada',
            'page.success.subtitle': 'Su solicitud ha ingresado a nuestra cola de procesamiento segura.',
            'page.success.amount': 'Monto enviado',
            'page.success.recipient': 'Al beneficiario',
            'page.success.priority': 'Prioridad de procesamiento',
            'page.success.arrival': 'Estado actual',
            'page.success.receipt': 'Se ha enviado un correo de confirmación con el recibo completo a su dirección registrada.',
            'page.success.emailNotice': 'Se ha enviado un correo de confirmación con el recibo completo a su dirección registrada.',
            'page.success.download': 'Descargar recibo',
            'page.success.back': 'Volver al panel',
            'page.profile.title': 'Configuración de la cuenta',
            'page.profile.personalInfo': 'Información personal',
            'page.profile.security': 'Configuración de seguridad',
            'page.profile.preferences': 'Preferencias de comunicación',
            'page.profile.saveChanges': 'Guardar cambios',
            'page.profile.password': 'Cambiar contraseña',
            'page.profile.pinTitle': 'PIN de transacción',
            'page.profile.pinSubtitle': 'Administre su PIN seguro para transferencias.',
            'page.profile.currentPin': 'El PIN está activo',
            'page.profile.noPin': 'Aún no se creó ningún PIN',
            'page.profile.pinCurrentPassword': 'Contraseña actual',
            'page.profile.pinNew': 'Nuevo PIN',
            'page.profile.pinConfirm': 'Confirmar PIN',
            'page.profile.pinChange': 'Actualizar PIN',
            'page.profile.passwordIncorrect': 'La contraseña actual es incorrecta.',
            'page.profile.preferencesEmail': 'Alertas por correo',
            'page.profile.preferencesSms': 'Actualizaciones por SMS',
            'page.profile.savePreferences': 'Guardar preferencias',
            'page.support.title': 'Nodo de soporte seguro',
            'page.support.subtitle': 'Su consulta se envía a través de un canal protegido y es revisada por nuestro equipo especializado.',
            'page.support.transmit': 'Transmitir de forma segura',
            'page.support.commonRequests': 'Solicitudes comunes',
            'page.support.fullName': 'Nombre completo',
            'page.support.accountId': 'ID de cuenta',
            'page.support.category': 'Categoría de consulta',
            'page.support.message': 'Mensaje cifrado',
            'page.admin.title': 'Supervisión de transferencias',
            'page.admin.description': 'Aprobar solicitudes, asignar estado y definir la marca de tiempo visible.',
            'page.admin.registerTitle': 'Registrar cliente',
            'page.admin.registerDescription': 'Crear un perfil de cuenta nuevo y asignar un saldo inicial.',
            'page.admin.mobileMenu': 'Menú',
            'page.admin.toggleNav': 'Alternar navegación',
            'page.admin.applyDecision': 'Aplicar decisión',
            'page.admin.registerUser': 'Registrar usuario',
            'page.admin.transferUpdated': 'Transferencia actualizada correctamente.',
            'page.admin.topupSuccess': 'Transacción exitosa.',
            'page.admin.otpRequired': 'Ingrese el OTP para aprobar el registro.',
            'page.admin.otpIncorrect': 'El OTP ingresado es incorrecto.',
            'page.admin.terminate': 'Terminar sesión',
            'page.admin.clientDirectory': 'Directorio de usuarios',
            'page.admin.vaults': 'Cajas globales',
            'page.admin.supportDesk': 'Mesa de soporte',
            'page.admin.clientRegistry': 'Registro de clientes',
            'page.admin.userManagement': 'Gestión de usuarios',
            'page.admin.searchClients': 'Buscar cliente...',
            'page.admin.topup': 'Recargar',
            'page.admin.message': 'Mensaje',
            'page.admin.hold': 'Retener',
            'page.admin.release': 'Liberar'
        },
        fr: {
            'common.language': 'Langue',
            'common.save': 'Enregistrer',
            'common.cancel': 'Annuler',
            'common.submit': 'Envoyer',
            'common.error': 'Erreur',
            'common.success': 'Succès',
            'common.logout': 'Déconnexion',
            'common.dashboard': 'Tableau de bord',
            'common.transfers': 'Transferts',
            'common.support': 'Support',
            'common.profile': 'Profil',
            'common.back': 'Retour',
            'common.amount': 'Montant',
            'common.beneficiary': 'Bénéficiaire',
            'common.status': 'Statut',
            'common.processing': 'Traitement',
            'common.underReview': 'Sous revue',
            'common.pendingVerification': 'Vérification en attente',
            'common.completed': 'Terminé',
            'common.visitBranch': 'Visitez la succursale la plus proche',
            'common.availableBalance': 'Solde disponible',
            'common.currentBalance': 'Solde actuel',
            'common.currentStatus': 'Statut actuel',
            'common.pinUpdated': 'PIN mis à jour avec succès.',
            'common.pinRequired': 'PIN de transfert requis',
            'common.preferencesUpdated': 'Préférences mises à jour avec succès.',
            'common.processingStatus': 'Statut actuel',
            'common.proceed': 'Continuer',
            'common.review': 'Vérifier',
            'common.required': 'Requis',
            'common.secure': 'Sécurisé',
            'common.verified': 'Vérifié',
            'common.confirm': 'Confirmer',
            'common.pleaseWait': 'Veuillez patienter',
            'common.accountSettings': 'Paramètres du compte',
            'common.security': 'Sécurité',
            'common.preferences': 'Préférences',
            'common.profileSettings': 'Paramètres du profil',
            'page.login.title': 'Passerelle sécurisée',
            'page.login.signIn': 'Se connecter',
            'page.login.email': 'Adresse e-mail',
            'page.login.password': 'Mot de passe',
            'page.login.forgot': 'Oublié ?',
            'page.login.needAccount': 'Besoin d’un compte ?',
            'page.login.contactTeam': 'Contactez notre équipe',
            'page.login.statusMissing': 'Veuillez saisir votre adresse e-mail et votre mot de passe.',
            'page.login.statusInvalidEmail': 'Veuillez utiliser une adresse e-mail valide.',
            'page.login.statusPasswordLength': 'Le mot de passe doit contenir au moins 6 caractères.',
            'page.login.statusIncorrectPassword': 'Mot de passe incorrect. Veuillez réessayer.',
            'page.login.statusPendingActivation': 'Compte en attente d’activation. Complétez la vérification OTP avec l’administrateur.',
            'page.login.statusAccessVerified': 'Accès vérifié. Redirection vers votre tableau de bord...',
            'page.transfer.title': 'Nouveau transfert',
            'page.transfer.description': 'Préparez votre prochain paiement international en toute sécurité.',
            'page.transfer.recipientName': 'Nom complet du bénéficiaire',
            'page.transfer.accountNumber': 'Numéro de compte / IBAN',
            'page.transfer.swift': 'Code SWIFT / BIC',
            'page.transfer.currency': 'Devise de destination',
            'page.transfer.priority': 'Priorité',
            'page.transfer.amount': 'Montant à envoyer (USD)',
            'page.transfer.estimatedDelivery': 'Livraison estimée',
            'page.transfer.estimatedFee': 'Frais estimés',
            'page.transfer.proceed': 'Continuer à la vérification →',
            'page.transfer.pinTitle': 'PIN sécurisé de transfert',
            'page.transfer.pinCreate': 'Créer un PIN de transaction',
            'page.transfer.pinEnter': 'Entrez votre PIN de transaction',
            'page.transfer.pinCreatePrompt': 'Créez un PIN de 4 ou 6 chiffres pour les transferts sécurisés.',
            'page.transfer.pinConfirm': 'Confirmer le PIN',
            'page.transfer.currentPassword': 'Mot de passe actuel',
            'page.transfer.pinError': 'Le PIN saisi est incorrect.',
            'page.transfer.pinMismatch': 'Les valeurs du PIN ne correspondent pas.',
            'page.transfer.pinInvalid': 'Veuillez saisir un PIN de 4 ou 6 chiffres.',
            'page.transfer.pinSuccess': 'PIN vérifié. Passage à la vérification.',
            'page.transfer.alertIncomplete': 'Veuillez compléter tous les détails du bénéficiaire et saisir un montant valide.',
            'page.transfer.alertBalance': 'Le montant du transfert dépasse votre solde disponible.',
            'page.transfer.preparingReview': 'Préparation de la vérification...',
            'page.review.title': 'Autorisation finale',
            'page.review.subtitle': 'Vérification sécurisée avant l’envoi',
            'page.review.beneficiary': 'Bénéficiaire',
            'page.review.amount': 'Montant',
            'page.review.status': 'Statut de la transaction',
            'page.review.confirm': 'Confirmer et envoyer',
            'page.review.processing': 'Votre transfert est en cours de préparation pour le traitement.',
            'page.review.processingMessage': 'Votre transfert est en cours de préparation pour le traitement.',
            'page.review.pinLabel': 'PIN de transaction',
            'page.review.pinPlaceholder': 'Entrez votre PIN',
            'page.review.pending': 'En attente de confirmation sécurisée',
            'page.review.completed': 'Transfert soumis avec succès.',
            'page.pending.title': 'Vérification de sécurité',
            'page.pending.description': 'Votre transfert est en cours d’examen et peut nécessiter une vérification rapide.',
            'page.pending.noTransfer': 'Aucun transfert en attente n’a été trouvé.',
            'page.pending.branch': 'Visitez la succursale locale',
            'page.pending.branchText': 'Apportez une pièce d’identité à une succursale vérifiée si notre équipe le demande.',
            'page.pending.support': 'Contacter le support',
            'page.pending.supportText': 'Contactez le bureau de vérification au +1 (800) ODIN-SEC.',
            'page.pending.return': 'Retour au tableau de bord',
            'page.success.title': 'Transfert soumis',
            'page.success.subtitle': 'Votre demande a rejoint notre file de traitement sécurisée.',
            'page.success.amount': 'Montant envoyé',
            'page.success.recipient': 'Au bénéficiaire',
            'page.success.priority': 'Priorité de traitement',
            'page.success.arrival': 'Statut actuel',
            'page.success.receipt': 'Un e-mail de confirmation avec le reçu complet a été envoyé à votre adresse enregistrée.',
            'page.success.emailNotice': 'Un e-mail de confirmation avec le reçu complet a été envoyé à votre adresse enregistrée.',
            'page.success.download': 'Télécharger le reçu',
            'page.success.back': 'Retour au tableau de bord',
            'page.profile.title': 'Paramètres du compte',
            'page.profile.personalInfo': 'Informations personnelles',
            'page.profile.security': 'Paramètres de sécurité',
            'page.profile.preferences': 'Préférences de communication',
            'page.profile.saveChanges': 'Enregistrer les modifications',
            'page.profile.password': 'Changer le mot de passe',
            'page.profile.pinTitle': 'PIN de transaction',
            'page.profile.pinSubtitle': 'Gérez votre PIN sécurisé pour les transferts.',
            'page.profile.currentPin': 'Le PIN est actif',
            'page.profile.noPin': 'Aucun PIN n’a encore été créé',
            'page.profile.pinCurrentPassword': 'Mot de passe actuel',
            'page.profile.pinNew': 'Nouveau PIN',
            'page.profile.pinConfirm': 'Confirmer le PIN',
            'page.profile.pinChange': 'Mettre à jour le PIN',
            'page.profile.passwordIncorrect': 'Le mot de passe actuel est incorrect.',
            'page.profile.preferencesEmail': 'Alertes par e-mail',
            'page.profile.preferencesSms': 'Mises à jour par SMS',
            'page.profile.savePreferences': 'Enregistrer les préférences',
            'page.support.title': 'Nœud de support sécurisé',
            'page.support.subtitle': 'Votre demande passe par un canal protégé et est examinée par notre équipe spécialisée.',
            'page.support.transmit': 'Transmettre en toute sécurité',
            'page.support.commonRequests': 'Demandes courantes',
            'page.support.fullName': 'Nom complet',
            'page.support.accountId': 'ID du compte',
            'page.support.category': 'Catégorie de demande',
            'page.support.message': 'Message chiffré',
            'page.admin.title': 'Supervision des transferts',
            'page.admin.description': 'Approuver les demandes, attribuer un statut et définir la date visible.',
            'page.admin.registerTitle': 'Créer un client',
            'page.admin.registerDescription': 'Créer un nouveau profil de compte et attribuer un solde initial.',
            'page.admin.mobileMenu': 'Menu',
            'page.admin.toggleNav': 'Basculer la navigation',
            'page.admin.applyDecision': 'Appliquer la décision',
            'page.admin.registerUser': 'Créer un utilisateur',
            'page.admin.transferUpdated': 'Transfert mis à jour avec succès.',
            'page.admin.topupSuccess': 'Transaction réussie.',
            'page.admin.otpRequired': 'Saisissez l’OTP pour approuver l’enregistrement.',
            'page.admin.otpIncorrect': 'L’OTP saisi est incorrect.',
            'page.admin.terminate': 'Terminer la session',
            'page.admin.clientDirectory': 'Répertoire des clients',
            'page.admin.vaults': 'Coffres globaux',
            'page.admin.supportDesk': 'Pôle de support',
            'page.admin.clientRegistry': 'Registre des clients',
            'page.admin.userManagement': 'Gestion des utilisateurs',
            'page.admin.searchClients': 'Rechercher un client...',
            'page.admin.topup': 'Recharger',
            'page.admin.message': 'Message',
            'page.admin.hold': 'Suspendre',
            'page.admin.release': 'Libérer'
        },
        de: {
            'common.language': 'Sprache',
            'common.save': 'Speichern',
            'common.cancel': 'Abbrechen',
            'common.submit': 'Senden',
            'common.error': 'Fehler',
            'common.success': 'Erfolg',
            'common.logout': 'Abmelden',
            'common.dashboard': 'Dashboard',
            'common.transfers': 'Überweisungen',
            'common.support': 'Support',
            'common.profile': 'Profil',
            'common.back': 'Zurück',
            'common.amount': 'Betrag',
            'common.beneficiary': 'Empfänger',
            'common.status': 'Status',
            'common.processing': 'Verarbeitung',
            'common.underReview': 'In Prüfung',
            'common.pendingVerification': 'Verifizierung ausstehend',
            'common.completed': 'Abgeschlossen',
            'common.visitBranch': 'Besuchen Sie die nächste Filiale',
            'common.availableBalance': 'Verfügbarer Saldo',
            'common.currentBalance': 'Aktueller Saldo',
            'common.currentStatus': 'Aktueller Status',
            'common.pinUpdated': 'PIN erfolgreich aktualisiert.',
            'common.pinRequired': 'Überweisungspin erforderlich',
            'common.preferencesUpdated': 'Einstellungen erfolgreich aktualisiert.',
            'common.processingStatus': 'Aktueller Status',
            'common.proceed': 'Weiter',
            'common.review': 'Prüfen',
            'common.required': 'Erforderlich',
            'common.secure': 'Sicher',
            'common.verified': 'Verifiziert',
            'common.confirm': 'Bestätigen',
            'common.pleaseWait': 'Bitte warten',
            'common.accountSettings': 'Kontoeinstellungen',
            'common.security': 'Sicherheit',
            'common.preferences': 'Einstellungen',
            'common.profileSettings': 'Profileinstellungen',
            'page.login.title': 'Sicherer Zugang',
            'page.login.signIn': 'Zum Dashboard anmelden',
            'page.login.email': 'E-Mail-Adresse',
            'page.login.password': 'Passwort',
            'page.login.forgot': 'Vergessen?',
            'page.login.needAccount': 'Benötigen Sie ein Konto?',
            'page.login.contactTeam': 'Kontaktieren Sie unser Team',
            'page.login.statusMissing': 'Bitte geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.',
            'page.login.statusInvalidEmail': 'Bitte verwenden Sie eine gültige E-Mail-Adresse.',
            'page.login.statusPasswordLength': 'Das Passwort muss mindestens 6 Zeichen lang sein.',
            'page.login.statusIncorrectPassword': 'Falsches Passwort. Bitte versuchen Sie es erneut.',
            'page.login.statusPendingActivation': 'Konto wartet auf Aktivierung. Schließen Sie die OTP-Verifizierung mit dem Administrator ab.',
            'page.login.statusAccessVerified': 'Zugang verifiziert. Weiterleitung zum Dashboard...',
            'page.transfer.title': 'Neue Überweisung',
            'page.transfer.description': 'Bereiten Sie Ihre nächste internationale Zahlung sicher vor.',
            'page.transfer.recipientName': 'Vollständiger Name des Empfängers',
            'page.transfer.accountNumber': 'Kontonummer / IBAN',
            'page.transfer.swift': 'SWIFT-/BIC-Code',
            'page.transfer.currency': 'Ziellandwährung',
            'page.transfer.priority': 'Priorität',
            'page.transfer.amount': 'Betrag senden (USD)',
            'page.transfer.estimatedDelivery': 'Geschätzte Lieferung',
            'page.transfer.estimatedFee': 'Geschätzte Gebühr',
            'page.transfer.proceed': 'Zur Prüfung fortfahren →',
            'page.transfer.pinTitle': 'Sicherer Überweisungspin',
            'page.transfer.pinCreate': 'Transaktions-PIN erstellen',
            'page.transfer.pinEnter': 'Geben Sie Ihre Transaktions-PIN ein',
            'page.transfer.pinCreatePrompt': 'Erstellen Sie eine 4- oder 6-stellige PIN für sichere Überweisungen.',
            'page.transfer.pinConfirm': 'PIN bestätigen',
            'page.transfer.currentPassword': 'Aktuelles Passwort',
            'page.transfer.pinError': 'Die eingegebene PIN ist falsch.',
            'page.transfer.pinMismatch': 'Die PIN-Werte stimmen nicht überein.',
            'page.transfer.pinInvalid': 'Bitte geben Sie eine 4- oder 6-stellige PIN ein.',
            'page.transfer.pinSuccess': 'PIN verifiziert. Weiter zur Prüfung.',
            'page.transfer.alertIncomplete': 'Bitte vervollständigen Sie alle Empfängerdaten und geben Sie einen gültigen Betrag ein.',
            'page.transfer.alertBalance': 'Der Überweisungsbetrag übersteigt Ihren verfügbaren Saldo.',
            'page.transfer.preparingReview': 'Prüfung wird vorbereitet...',
            'page.review.title': 'Finale Freigabe',
            'page.review.subtitle': 'Sichere Prüfung vor dem Versand',
            'page.review.beneficiary': 'Empfänger',
            'page.review.amount': 'Betrag',
            'page.review.status': 'Transaktionsstatus',
            'page.review.confirm': 'Bestätigen und versenden',
            'page.review.processing': 'Ihre Überweisung wird für die Verarbeitung vorbereitet.',
            'page.review.processingMessage': 'Ihre Überweisung wird für die Verarbeitung vorbereitet.',
            'page.review.pinLabel': 'Transaktions-PIN',
            'page.review.pinPlaceholder': 'PIN eingeben',
            'page.review.pending': 'Warten auf sichere Bestätigung',
            'page.review.completed': 'Überweisung erfolgreich übermittelt.',
            'page.pending.title': 'Sicherheitsprüfung',
            'page.pending.description': 'Ihre Überweisung wird geprüft und kann eine kurze Verifizierung erfordern.',
            'page.pending.noTransfer': 'Keine ausstehende Überweisung gefunden.',
            'page.pending.branch': 'Besuchen Sie die lokale Filiale',
            'page.pending.branchText': 'Bringen Sie einen Ausweis zu einer verifizierten Filiale, falls unser Team dies anfordert.',
            'page.pending.support': 'Support anrufen',
            'page.pending.supportText': 'Kontaktieren Sie die Verifizierungsstelle unter +1 (800) ODIN-SEC.',
            'page.pending.return': 'Zurück zum Dashboard',
            'page.success.title': 'Überweisung übermittelt',
            'page.success.subtitle': 'Ihre Anfrage ist in unsere sichere Verarbeitungsliste eingetreten.',
            'page.success.amount': 'Gesendeter Betrag',
            'page.success.recipient': 'An den Empfänger',
            'page.success.priority': 'Verarbeitungspriorität',
            'page.success.arrival': 'Aktueller Status',
            'page.success.receipt': 'Eine Bestätigungs-E-Mail mit dem vollständigen Beleg wurde an Ihre registrierte Adresse gesendet.',
            'page.success.emailNotice': 'Eine Bestätigungs-E-Mail mit dem vollständigen Beleg wurde an Ihre registrierte Adresse gesendet.',
            'page.success.download': 'Beleg herunterladen',
            'page.success.back': 'Zurück zum Dashboard',
            'page.profile.title': 'Kontoeinstellungen',
            'page.profile.personalInfo': 'Persönliche Angaben',
            'page.profile.security': 'Sicherheitseinstellungen',
            'page.profile.preferences': 'Kommunikationseinstellungen',
            'page.profile.saveChanges': 'Änderungen speichern',
            'page.profile.password': 'Passwort ändern',
            'page.profile.pinTitle': 'Transaktions-PIN',
            'page.profile.pinSubtitle': 'Verwalten Sie Ihre sichere Überweisungspin.',
            'page.profile.currentPin': 'PIN ist aktiv',
            'page.profile.noPin': 'Noch keine PIN erstellt',
            'page.profile.pinCurrentPassword': 'Aktuelles Passwort',
            'page.profile.pinNew': 'Neue PIN',
            'page.profile.pinConfirm': 'PIN bestätigen',
            'page.profile.pinChange': 'PIN aktualisieren',
            'page.profile.passwordIncorrect': 'Das aktuelle Passwort ist falsch.',
            'page.profile.preferencesEmail': 'E-Mail-Benachrichtigungen',
            'page.profile.preferencesSms': 'SMS-Updates',
            'page.profile.savePreferences': 'Einstellungen speichern',
            'page.support.title': 'Sicherer Support-Knoten',
            'page.support.subtitle': 'Ihre Anfrage wird über einen geschützten Kanal weitergeleitet und von unserem Spezialistenteam geprüft.',
            'page.support.transmit': 'Sicher übertragen',
            'page.support.commonRequests': 'Häufige Anfragen',
            'page.support.fullName': 'Vollständiger Name',
            'page.support.accountId': 'Kontonummer',
            'page.support.category': 'Anfragekategorie',
            'page.support.message': 'Verschlüsselte Nachricht',
            'page.admin.title': 'Überwachung von Überweisungen',
            'page.admin.description': 'Anfragen genehmigen, einen Status zuweisen und den sichtbaren Zeitstempel festlegen.',
            'page.admin.registerTitle': 'Kunden registrieren',
            'page.admin.registerDescription': 'Ein neues Kundenprofil erstellen und ein Startguthaben zuweisen.',
            'page.admin.mobileMenu': 'Menü',
            'page.admin.toggleNav': 'Navigation umschalten',
            'page.admin.applyDecision': 'Entscheidung anwenden',
            'page.admin.registerUser': 'Benutzer registrieren',
            'page.admin.transferUpdated': 'Überweisung erfolgreich aktualisiert.',
            'page.admin.topupSuccess': 'Transaktion erfolgreich.',
            'page.admin.otpRequired': 'Geben Sie das OTP ein, um die Registrierung zu genehmigen.',
            'page.admin.otpIncorrect': 'Das eingegebene OTP ist falsch.',
            'page.admin.terminate': 'Sitzung beenden',
            'page.admin.clientDirectory': 'Benutzerverzeichnis',
            'page.admin.vaults': 'Globale Tresore',
            'page.admin.supportDesk': 'Support-Desk',
            'page.admin.clientRegistry': 'Kundenregister',
            'page.admin.userManagement': 'Benutzerverwaltung',
            'page.admin.searchClients': 'Kunden suchen...',
            'page.admin.topup': 'Aufladen',
            'page.admin.message': 'Nachricht',
            'page.admin.hold': 'Sperren',
            'page.admin.release': 'Freigeben'
        }
    };

    function hashValue(value) {
        let hash = 0;
        for (let index = 0; index < value.length; index += 1) {
            hash = (hash << 5) - hash + value.charCodeAt(index);
            hash |= 0;
        }
        return `h${Math.abs(hash).toString(16)}`;
    }

    function getBrowserLanguage() {
        const preferred = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
        const trimmed = (preferred || 'en').split('-')[0];
        return supportedLanguages[trimmed] ? trimmed : 'en';
    }

    function getStoredLanguage() {
        const stored = localStorage.getItem('odinLanguage');
        return stored && supportedLanguages[stored] ? stored : null;
    }

    function getCurrentLanguage() {
        return getStoredLanguage() || getBrowserLanguage();
    }

    function t(key, fallback) {
        const lang = getCurrentLanguage();
        const langMap = translations[lang] || translations.en;
        return langMap[key] || fallback || key;
    }

    function applyTranslations() {
        const lang = getCurrentLanguage();
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (!key) {
                return;
            }
            const value = t(key, element.getAttribute('data-i18n-default') || key);
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = value;
                } else {
                    element.value = value;
                }
            } else {
                element.textContent = value;
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.setAttribute('placeholder', t(key, element.getAttribute('data-i18n-default') || key));
        });
        document.querySelectorAll('[data-i18n-title]').forEach((element) => {
            const key = element.getAttribute('data-i18n-title');
            element.setAttribute('title', t(key, element.getAttribute('data-i18n-default') || key));
        });
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) {
            langSelect.value = lang;
        }
    }

    function injectLanguageSwitcher() {
        if (document.getElementById('odinLanguageSwitcher')) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.id = 'odinLanguageSwitcher';
        wrapper.className = 'fixed right-4 top-4 z-[60] rounded-full border border-slate-200 bg-white/95 px-3 py-2 shadow-lg shadow-slate-200/70 backdrop-blur';
        wrapper.innerHTML = `
            <label class="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">${t('common.language', 'Language')}</label>
            <select id="languageSelect" class="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700 outline-none focus:border-blue-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
            </select>
        `;
        document.body.appendChild(wrapper);
        const select = document.getElementById('languageSelect');
        if (select) {
            select.addEventListener('change', (event) => {
                const nextLang = event.target.value;
                localStorage.setItem('odinLanguage', nextLang);
                applyTranslations();
                if (window.odinApp && typeof window.odinApp.onLanguageChanged === 'function') {
                    window.odinApp.onLanguageChanged(nextLang);
                }
            });
        }
    }

    function formatCurrency(amount) {
        return `$${Number(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    function getDefaultUsers() {
        return [
            { id: 'ODIN-8842-X', name: 'Morris Thomas', username: 'morris', status: 'Verified Elite', balance: 94250, held: false, initials: 'MT', email: 'morris@odinprivate.com', phone: '+1-555-0101', accountNumber: '1002003001', registrationDate: '2025-01-14', lastLogin: '', loginActivity: [], isActive: true, passwordHash: hashValue('Welcome123!'), registrationStatus: 'Active', transactionPin: '' },
            { id: 'ODIN-2217-B', name: 'Elena Hart', username: 'elena', status: 'Verified', balance: 24800, held: false, initials: 'EH', email: 'elena@odinprivate.com', phone: '+1-555-0102', accountNumber: '1002003002', registrationDate: '2025-02-09', lastLogin: '', loginActivity: [], isActive: true, passwordHash: hashValue('Welcome123!'), registrationStatus: 'Active', transactionPin: '' },
            { id: 'ODIN-3394-C', name: 'Amir Das', username: 'amir', status: 'Pending Review', balance: 12600, held: false, initials: 'AD', email: 'amir@odinprivate.com', phone: '+1-555-0103', accountNumber: '1002003003', registrationDate: '2025-03-11', lastLogin: '', loginActivity: [], isActive: true, passwordHash: hashValue('Welcome123!'), registrationStatus: 'Active', transactionPin: '' }
        ];
    }

    function ensureUserDefaults(user) {
        return {
            id: user.id || `ODIN-${Date.now()}`,
            name: user.name || 'Unnamed Client',
            username: user.username || (user.name || 'client').toLowerCase().replace(/\s+/g, '.'),
            status: user.status || 'Verified',
            balance: Number(user.balance || 0),
            held: Boolean(user.held),
            initials: user.initials || (user.name || 'U').split(' ').filter(Boolean).slice(0, 2).map((part) => part[0].toUpperCase()).join('') || 'U',
            email: user.email || '',
            phone: user.phone || '',
            accountNumber: user.accountNumber || '',
            registrationDate: user.registrationDate || new Date().toISOString(),
            lastLogin: user.lastLogin || '',
            loginActivity: Array.isArray(user.loginActivity) ? user.loginActivity : [],
            isActive: user.isActive !== false,
            passwordHash: user.passwordHash || hashValue('Welcome123!'),
            registrationStatus: user.registrationStatus || 'Active',
            otp: user.otp || '',
            transactionPin: user.transactionPin || '',
            transactionPinSet: Boolean(user.transactionPin)
        };
    }

    function getAdminUsers() {
        const stored = localStorage.getItem('odinAdminUsers');
        if (!stored) {
            const seeded = getDefaultUsers().map(ensureUserDefaults);
            localStorage.setItem('odinAdminUsers', JSON.stringify(seeded));
            return seeded;
        }
        try {
            return JSON.parse(stored).map(ensureUserDefaults);
        } catch (error) {
            return getDefaultUsers().map(ensureUserDefaults);
        }
    }

    function saveUsers(list) {
        const normalized = (list || []).map(ensureUserDefaults);
        localStorage.setItem('odinAdminUsers', JSON.stringify(normalized));
        window.dispatchEvent(new Event('odin:state-updated'));
        return normalized;
    }

    function getCurrentUserProfile() {
        const adminUsers = getAdminUsers();
        const userEmail = localStorage.getItem('odinUser') || '';
        if (!adminUsers.length) {
            return null;
        }
        const activeUserId = localStorage.getItem('odinActiveUserId');
        if (activeUserId) {
            const matched = adminUsers.find((item) => item.id === activeUserId);
            if (matched) {
                return matched;
            }
        }
        const normalizedEmail = userEmail.toLowerCase();
        const matchedByEmail = adminUsers.find((item) => item.email && item.email.toLowerCase() === normalizedEmail);
        if (matchedByEmail) {
            return matchedByEmail;
        }
        return adminUsers[0];
    }

    function verifyPassword(inputPassword, storedHash) {
        if (!storedHash) {
            return inputPassword === 'Welcome123!';
        }
        return hashValue(inputPassword) === storedHash;
    }

    function setTransactionPin(user, newPin) {
        if (!user) {
            return null;
        }
        user.transactionPin = hashValue(newPin);
        user.transactionPinSet = true;
        return user;
    }

    function verifyTransactionPin(user, pin) {
        if (!user || !user.transactionPin) {
            return false;
        }
        return hashValue(pin) === user.transactionPin;
    }

    function normalizeTransferStatus(status) {
        const value = (status || '').toString().trim().toLowerCase();
        if (['processing', 'pending otp', 'pending otp', 'submitted', 'initiated'].includes(value)) {
            return 'Processing';
        }
        if (['under review', 'pending', 'review', 'pending review'].includes(value)) {
            return 'Under Review';
        }
        if (['pending verification', 'pending verification required', 'verification'].includes(value)) {
            return 'Pending Verification';
        }
        if (['completed', 'successful', 'complete'].includes(value)) {
            return 'Completed';
        }
        if (['visit nearest branch', 'visit branch', 'branch'].includes(value)) {
            return 'Visit Nearest Branch';
        }
        return status || 'Processing';
    }

    function getStatusLabel(status) {
        const normalized = normalizeTransferStatus(status);
        const statusMap = {
            Processing: 'common.processing',
            'Under Review': 'common.underReview',
            'Pending Verification': 'common.pendingVerification',
            Completed: 'common.completed',
            'Visit Nearest Branch': 'common.visitBranch'
        };
        return t(statusMap[normalized] || 'common.processing', normalized);
    }

    function formatStatus(status) {
        const normalized = normalizeTransferStatus(status);
        return getStatusLabel(normalized);
    }

    function upsertTransaction(entry) {
        const history = JSON.parse(localStorage.getItem('odinTransactions') || '[]');
        const existingIndex = history.findIndex((item) => item.requestId === entry.requestId || item.id === entry.id);
        if (existingIndex >= 0) {
            history[existingIndex] = entry;
        } else {
            history.unshift(entry);
        }
        localStorage.setItem('odinTransactions', JSON.stringify(history.slice(0, 16)));
        return history[0];
    }

    function getTransactions() {
        try {
            return JSON.parse(localStorage.getItem('odinTransactions') || '[]');
        } catch (error) {
            return [];
        }
    }

    function onLanguageChanged() {
        applyTranslations();
    }

    function persistTransferRequest(updatedRequest) {
        const requests = JSON.parse(localStorage.getItem('odinTransferRequests') || '[]');
        const index = requests.findIndex((item) => item.id === updatedRequest.id);
        if (index >= 0) {
            requests[index] = { ...requests[index], ...updatedRequest };
        } else {
            requests.unshift(updatedRequest);
        }
        localStorage.setItem('odinTransferRequests', JSON.stringify(requests));
        return requests;
    }

    function completeTransferRequest(transferRequest, nextStatus, adminDate = '', adminTime = '') {
        const currentUser = getCurrentUserProfile();
        const normalizedStatus = normalizeTransferStatus(nextStatus || transferRequest.status || 'Processing');
        const timestamp = adminDate && adminTime ? new Date(`${adminDate}T${adminTime}`).toISOString() : new Date().toISOString();
        const previousStatus = normalizeTransferStatus(transferRequest.status || 'Processing');
        const updatedTransfer = {
            ...transferRequest,
            status: normalizedStatus,
            adminDecision: normalizedStatus,
            adminDate,
            adminTime,
            reviewedAt: timestamp,
            completedAt: timestamp,
            createdAt: transferRequest.createdAt || timestamp
        };

        const users = getAdminUsers();
        const sender = users.find((item) => item.id === (transferRequest.senderId || localStorage.getItem('odinActiveUserId')));
        if (sender && previousStatus !== 'Completed' && normalizedStatus === 'Completed') {
            sender.balance = Math.max(0, Number(sender.balance || 0) - Number(updatedTransfer.amount || 0));
            const senderIndex = users.findIndex((item) => item.id === sender.id);
            if (senderIndex >= 0) {
                users[senderIndex] = sender;
            }
            saveUsers(users);
        }

        persistTransferRequest(updatedTransfer);
        localStorage.setItem('pendingTransfer', JSON.stringify(updatedTransfer));
        const transactionEntry = {
            id: `txn-${updatedTransfer.id}`,
            requestId: updatedTransfer.id,
            type: 'transfer',
            beneficiary: updatedTransfer.beneficiary,
            amount: Number(updatedTransfer.amount || 0),
            status: normalizedStatus,
            createdAt: updatedTransfer.createdAt || timestamp,
            completedAt: timestamp,
            adminDate,
            adminTime,
            senderId: updatedTransfer.senderId
        };
        upsertTransaction(transactionEntry);
        return { transfer: updatedTransfer, transaction: transactionEntry, currentUser: currentUser || sender };
    }

    function creditAccount(userId, amount, adminDate = '', adminTime = '') {
        const amountValue = Number(amount || 0);
        if (!userId || amountValue <= 0) {
            return null;
        }
        const users = getAdminUsers();
        const user = users.find((item) => item.id === userId);
        if (!user) {
            return null;
        }
        const timestamp = adminDate && adminTime ? new Date(`${adminDate}T${adminTime}`).toISOString() : new Date().toISOString();
        user.balance = Number(user.balance || 0) + amountValue;
        const userIndex = users.findIndex((item) => item.id === user.id);
        if (userIndex >= 0) {
            users[userIndex] = user;
        }
        saveUsers(users);
        const historyEntry = {
            id: `fund-${Date.now()}`,
            type: 'funding',
            requestId: `fund-${Date.now()}`,
            beneficiary: user.name,
            amount: amountValue,
            status: 'Completed',
            createdAt: timestamp,
            completedAt: timestamp,
            adminDate,
            adminTime
        };
        upsertTransaction(historyEntry);
        return historyEntry;
    }

    function initSharedUI() {
        injectLanguageSwitcher();
        applyTranslations();
        document.addEventListener('visibilitychange', applyTranslations);
        window.addEventListener('storage', applyTranslations);
    }

    window.odinApp = {
        t,
        formatCurrency,
        getAdminUsers,
        saveUsers,
        getCurrentUserProfile,
        verifyPassword,
        setTransactionPin,
        verifyTransactionPin,
        normalizeTransferStatus,
        getStatusLabel,
        formatStatus,
        upsertTransaction,
        getTransactions,
        onLanguageChanged,
        getCurrentLanguage,
        hashValue,
        getDefaultUsers,
        ensureUserDefaults,
        completeTransferRequest,
        creditAccount,
        persistTransferRequest
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSharedUI);
    } else {
        initSharedUI();
    }
})();
